<script lang="ts">
	import { writable, derived } from 'svelte/store';
	import { onMount } from 'svelte';
	import { debounce } from 'lodash-es'; // You might need to install lodash-es for debounce functionality

	let title = '';
	let codeLink = '';
	let paperLink = '';
	let abstract = '';
	let novelty = '';
	let challenge = '';
	let method = '';
	let result = '';

	let searchResults = writable([]);
	let searchQuery = writable(''); // 存储输入框的值

	let comparisonBlocks = writable([]);

	// Function to fetch paper names from the backend
	async function fetchPapers(query: string) {
		// const response = await fetch(`/api/papers?search=${encodeURIComponent(query)}`);
		// const data = await response.json();
		searchResults.set(['test1', 'test2']);
	}

	const debouncedFetchPapers = debounce(fetchPapers, 300);

	function addComparisonBlock() {
		comparisonBlocks.update((blocks) => [
			...blocks,
			{ paperName: '', similarities: '', advantages: '', searchQuery: '' }
		]);
	}

	function removeComparisonBlock(index) {
		comparisonBlocks.update((blocks) => blocks.filter((_, i) => i !== index));
	}
	// 处理下拉选项点击
	function handleSelect(result) {
		searchQuery.set(result); // 更新输入框的值
		searchResults.set([]); // 清空搜索结果
	}
</script>

<div class="max-w-4xl mx-auto my-8 p-6 bg-white shadow-lg rounded-lg">
	<form on:submit|preventDefault class="space-y-4">
		<div class="flex flex-col">
			<label class="font-bold">Title:</label>
			<input type="text" bind:value={title} class="mt-1 p-2 border rounded-md" />
		</div>
		<div class="flex flex-col">
			<label class="font-bold">Code Link:</label>
			<input type="text" bind:value={codeLink} class="mt-1 p-2 border rounded-md" />
		</div>
		<div class="flex flex-col">
			<label class="font-bold">Paper Link:</label>
			<input type="text" bind:value={paperLink} class="mt-1 p-2 border rounded-md" />
		</div>
		<div class="flex flex-col">
			<label class="font-bold">Abstract:</label>
			<textarea bind:value={abstract} class="mt-1 p-2 border rounded-md h-24"></textarea>
		</div>
		<div class="flex flex-col">
			<label class="font-bold">Challenge:</label>
			<textarea type="text" bind:value={challenge} class="mt-1 p-2 border rounded-md" />
		</div>
		<div class="flex flex-col">
			<label class="font-bold">Novelty:</label>
			<textarea type="text" bind:value={novelty} class="mt-1 p-2 border rounded-md" />
		</div>

		<div class="flex flex-col">
			<label class="font-bold">Method:</label>
			<textarea type="text" bind:value={method} class="mt-1 p-2 border rounded-md" />
		</div>

        <div class="flex flex-col">
			<label class="font-bold">Result:</label>
			<textarea type="text" bind:value={result} class="mt-1 p-2 border rounded-md" />
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
                    <label class="font-bold">Title:</label>
					<input type="text" bind:value={$searchQuery} on:input={debouncedFetchPapers} class="input-class mt-1 p-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none w-full" />
					{#if $searchResults.length > 0}
						<ul
							class="results-class absolute bg-white border mt-1 z-10 w-full rounded-md shadow-lg max-h-60 overflow-auto"
						>
							{#each $searchResults as result}
								<li
									on:click={() => handleSelect(result)}
									class="result-item-class p-2 hover:bg-gray-100 cursor-pointer"
								>
									{result}
								</li>
							{/each}
						</ul>
					{/if}
				</div>

				<div class="flex flex-col mt-4">
					<label class="font-bold">Similarities:</label>
					<textarea
						type="text"
						bind:value={block.similarities}
						class="mt-1 p-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
					/>
				</div>
				<div class="flex flex-col mt-4">
					<label class="font-bold">Advantages:</label>
					<textarea
						type="text"
						bind:value={block.advantages}
						class="mt-1 p-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
					/>
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
