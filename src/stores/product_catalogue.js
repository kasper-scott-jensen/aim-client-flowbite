import { writable } from 'svelte/store'

export const categoryMenu = writable([
    { cat: 'dispensers', state: false, color: 'green-400' },
    { cat: 'controllers', state: false, color: 'amber-300' },
    { cat: 'tools', state: false, color: 'red-600' },
    { cat: 'accessories', state: false, color: 'violet-500' },
    { cat: 'replacement parts', state: false, color: 'blue-400' },
])

export const searchText = writable('')

export const sortingIndex = writable()
