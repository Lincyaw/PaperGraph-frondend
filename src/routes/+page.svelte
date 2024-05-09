<script lang="ts">
	import { writable, type Writable, get } from 'svelte/store';
	import { debounce } from 'lodash-es';

	let title: string = '';
	let codeLink: string = '';
	let paperLink: string = '';
	let abstract: string = '';
	let novelty: string = '';
	let challenge: string = '';
	let method: string = '';
	let result: string = '';

	interface ComparisonBlock {
		paperName: string;
		similarities: string;
		advantages: string;
		searchQuery: string;
		searchResults: string[];
	}

	let comparisonBlocks: Writable<ComparisonBlock[]> = writable([]);

	// Asynchronous function to simulate fetching paper names from the backend
	async function fetchPapers(blockIndex: number, query: string): Promise<void> {
		// Update specific comparison block's search results
		comparisonBlocks.update((blocks) => {
			blocks[blockIndex].searchResults = ['test1', 'test2']; // Assumed search results
			return blocks;
		});
	}

	function addComparisonBlock(): void {
		comparisonBlocks.update((blocks) => [
			...blocks,
			{ paperName: '', similarities: '', advantages: '', searchQuery: '', searchResults: [] }
		]);
	}

	function removeComparisonBlock(index: number): void {
		comparisonBlocks.update((blocks) => blocks.filter((_, i) => i !== index));
	}

	function handleSelect(blockIndex: number, result: string): void {
		comparisonBlocks.update((blocks) => {
			blocks[blockIndex].paperName = result; // Update paper name
			blocks[blockIndex].searchQuery = result; // Also update search query state
			blocks[blockIndex].searchResults = []; // Clear search results
			return blocks;
		});
	}

	function handleInput(blockIndex: number, event: Event): void {
		const target = event.target as HTMLInputElement; // Type casting
		const query = target.value;
		comparisonBlocks.update((blocks) => {
			blocks[blockIndex].searchQuery = query;
			return blocks;
		});
		debounce(() => fetchPapers(blockIndex, query), 300);
	}
    async function handleSubmit() {
        const submissionData = {
            title,
            codeLink,
            paperLink,
            abstract,
            novelty,
            challenge,
            method,
            result,
            comparisonBlocks: get(comparisonBlocks)
        };
        console.log(submissionData)
        try {
            const response = await fetch('/api/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(submissionData)
            });

            if (!response.ok) {
                throw new Error('Failed to submit data');
            }

            // Handle success
            alert('Submission successful!');
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Failed to submit the form.');
        }
    }
</script>

<div class="max-w-4xl mx-auto my-8 p-6 bg-white shadow-lg rounded-lg">
	<form on:submit|preventDefault={handleSubmit} class="space-y-4">
		<div class="flex flex-col">
			<label for="title" class="font-bold">Title:</label>
			<input id="title" type="text" bind:value={title} class="mt-1 p-2 border rounded-md" />
		</div>
		<div class="flex flex-col">
			<label for="codeLink" class="font-bold">Code Link:</label>
			<input id="codeLink" type="text" bind:value={codeLink} class="mt-1 p-2 border rounded-md" />
		</div>
		<div class="flex flex-col">
			<label for="paperLink" class="font-bold">Paper Link:</label>
			<input id="paperLink" type="text" bind:value={paperLink} class="mt-1 p-2 border rounded-md" />
		</div>
		<div class="flex flex-col">
			<label for="abstract" class="font-bold">Abstract:</label>
			<textarea id="abstract" bind:value={abstract} class="mt-1 p-2 border rounded-md h-24"
			></textarea>
		</div>
		<div class="flex flex-col">
			<label for="challenge" class="font-bold">Challenge:</label>
			<textarea id="challenge" bind:value={challenge} class="mt-1 p-2 border rounded-md"></textarea>
		</div>
		<div class="flex flex-col">
			<label for="novelty" class="font-bold">Novelty:</label>
			<textarea id="novelty" bind:value={novelty} class="mt-1 p-2 border rounded-md"></textarea>
		</div>
		<div class="flex flex-col">
			<label for="method" class="font-bold">Method:</label>
			<textarea id="method" bind:value={method} class="mt-1 p-2 border rounded-md"></textarea>
		</div>
		<div class="flex flex-col">
			<label for="result" class="font-bold">Result:</label>
			<textarea id="result" bind:value={result} class="mt-1 p-2 border rounded-md"></textarea>
		</div>
		<button
			type="button"
			on:click={addComparisonBlock}
			class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
			>Add Comparison Block</button
		>
		{#each $comparisonBlocks as block, index (index)}
			<div class="p-4 border rounded-md shadow-lg">
				<div class="relative w-full">
					<label for={`title-${index}`} class="font-bold">Title:</label>
					<input
						id={`title-${index}`}
						type="text"
						value={block.searchQuery}
						on:input={(event) => handleInput(index, event)}
						class="input-class mt-1 p-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none w-full"
					/>
					{#if block.searchResults.length > 0}
						<ul
							class="results-class absolute bg-white border mt-1 z-10 w-full rounded-md shadow-lg max-h-60 overflow-auto"
						>
							{#each block.searchResults as result}
								<li
									on:click={() => handleSelect(index, result)}
									class="result-item-class p-2 hover:bg-gray-100 cursor-pointer"
								>
									{result}
								</li>
							{/each}
						</ul>
					{/if}
				</div>
				<div class="flex flex-col mt-4">
					<label for={`similarities-${index}`} class="font-bold">Similarities:</label>
					<textarea
						id={`similarities-${index}`}
						bind:value={block.similarities}
						class="mt-1 p-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
					></textarea>
				</div>
				<div class="flex flex-col mt-4">
					<label for={`advantages-${index}`} class="font-bold">Advantages:</label>
					<textarea
						id={`advantages-${index}`}
						bind:value={block.advantages}
						class="mt-1 p-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
					></textarea>
				</div>
				<button
					type="button"
					on:click={() => removeComparisonBlock(index)}
					class="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
					>Remove</button
				>
			</div>
		{/each}
		<button type="submit" class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
			>Submit</button
		>
	</form>
</div>
