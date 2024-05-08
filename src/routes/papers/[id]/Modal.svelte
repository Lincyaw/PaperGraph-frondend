<!-- Modal.svelte -->
<script lang="ts">
    export let show = false;
    export let toggle: () => void;
    export let title = 'Edit';
  
    export let formContent = '';
  </script>
  
  {#if show}
  <div class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50" tabindex="-1" role="dialog">
    <div class="modal-dialog w-full max-w-lg" role="document">
      <div class="modal-content bg-white rounded-lg shadow-lg">
        <div class="modal-header flex justify-between items-center p-4 border-b">
          <h5 class="modal-title text-xl font-semibold">{title}</h5>
          <button type="button" class="close btn-close" on:click={toggle} aria-label="Close">
            <span class="text-gray-500 hover:text-gray-700" aria-hidden="true">&times;</span>
          </button>
        </div>
        <form action="" method="post">
          <div class="modal-body p-4">
            {@html formContent}
          </div>
          <div class="modal-footer p-4 border-t">
            <button type="submit" class="btn btn-primary px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  {/if}
  