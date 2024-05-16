import { writable } from 'svelte/store'

// MEGA MENUS OPEN/CLOSE STATES

export const megaMenuStates = writable([false, false, false])

// BREADCRUMB ARRAY

export const breadcrumb = writable([])
