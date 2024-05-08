<script>
	export let data;
</script>

<div class="flex justify-center">
  <ul class="space-y-4 mt-5 w-full max-w-md">
      {#each data.summaries as { slug, title }}
          <li class="bg-white shadow-lg rounded-lg">
              <a href="/{slug}" class="block p-5 text-blue-500 hover:text-blue-800 hover:bg-gray-100 rounded-lg transition duration-150">
                  {title}
              </a>
          </li>
      {/each}
  </ul>
</div>