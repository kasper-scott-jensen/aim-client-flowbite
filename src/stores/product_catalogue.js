import { writable } from 'svelte/store'

export const categoryMenu = writable([
    { cat: 'dispensers', state: false, color: 'bg-green-400' },
    { cat: 'controllers', state: false, color: 'bg-amber-300' },
    { cat: 'tools', state: false, color: 'bg-red-600' },
    { cat: 'accessories', state: false, color: 'bg-violet-500' },
    { cat: 'replacement parts', state: false, color: 'bg-blue-400' },
])

export const searchText = writable('')

export const sortingIndex = writable()
