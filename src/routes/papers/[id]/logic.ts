// logic.ts
import { writable } from 'svelte/store';

export const editSection = writable('');
export const showModal = writable(false);

export function toggleModal(section: string) {
  showModal.update(value => !value);
  editSection.set(section);
}
