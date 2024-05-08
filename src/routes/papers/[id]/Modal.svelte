<script>
    export let show = false;
    export let content;
    export let title;
    export let onSave;
    export let onClose;

    let editedContent = '';

    // 同步初始内容到编辑器
    $: if (show) {
        editedContent = content;
    }
</script>

{#if show}
<div class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center px-4">
    <div class="bg-white p-6 rounded-lg max-w-lg w-full">
        <header class="flex justify-between items-center mb-4">
            <h2 class="text-xl font-bold">{title}</h2>
            <button class="text-lg" on:click={onClose}>&times;</button>
        </header>
        <textarea class="w-full p-2 border border-gray-300 rounded shadow-sm h-40" bind:value={editedContent}></textarea>
        <footer class="mt-4 flex justify-end">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" on:click={() => onSave(editedContent)}>
                Save
            </button>
        </footer>
    </div>
</div>
{/if}