<script>
	export let data;
</script>

<div class="flex flex-col items-center justify-center min-h-screen">
    <div class="w-full max-w-4xl px-4 py-8">
        <h1 class="text-center text-3xl font-bold">{data.post.title}</h1>
        <div class="mt-4 text-center">
            {@html data.post.content}
        </div>
    </div>
</div>