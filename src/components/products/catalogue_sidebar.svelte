<script>
    import { onMount } from 'svelte'
    import {
        categoryMenu,
        searchText,
        sortingIndex,
    } from '../../stores/product_catalogue.js'

    // SELECT CATEGORIES
    function handleCategoryClick(index) {
        categoryMenu.update((categories) =>
            categories.map((cat, i) =>
                i === index ? { ...cat, state: !cat.state } : cat,
            ),
        )
    }

    // CLEAR-UP FUNCTIONS
    function handleClearCategoriesMenu() {
        categoryMenu.update((categories) =>
            categories.map((cat) => ({ ...cat, state: false })),
        )
    }

    function handleClearSearch() {
        searchText.set('')
    }
</script>

<!-- SORTING -->
<div class="flex flex-col w-full pb-8">
    <h3 class="mb-4 font-semibold text-gray-900">Sort By</h3>
    <form class="max-w-sm mx-auto w-full" id="sort-form">
        <select
            id="sorting"
            class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3"
            placeholder="Name"
            bind:value={$sortingIndex}
        >
            <option value="0">Name</option>
            <option value="1">Product No.</option>
        </select>
    </form>
</div>

<!-- SEARCH -->
<div class="flex w-full justify-between">
    <h3 class="mb-4 font-semibold text-gray-900">Search</h3>
    {#if $searchText && $searchText !== ''}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div class="flex flex-row cursor-pointer" on:click={handleClearSearch}>
            <p class="me-3 text-sm mt-0.5">Clear</p>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#222C56"
                class="w-6 h-6"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
            </svg>
        </div>
    {/if}
</div>
<form class="max-w-md mx-auto pb-8">
    <div class="relative">
        <div
            class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
        >
            <svg
                class="w-4 h-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
            >
                <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
            </svg>
        </div>
        <input
            bind:value={$searchText}
            type="search"
            id="default-search"
            class="caret block w-full p-3 ps-12 text-sm text-gray-900 border border-gray-200 rounded-lg bg-white"
            placeholder="Search ..."
        />
    </div>
</form>

<!-- CATEGORIES -->
<div class="flex w-full justify-between">
    <h3 class="mb-4 font-semibold text-gray-900">Categories</h3>
    {#if $categoryMenu.filter((cat) => cat.state).length > 0}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div
            class="flex flex-row cursor-pointer"
            on:click={handleClearCategoriesMenu}
        >
            <p class="me-3 text-sm mt-0.5">Clear</p>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#222C56"
                class="w-6 h-6"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
            </svg>
        </div>
    {/if}
</div>
<ul
    class="w-full text-sm font-medium text-gray-900 bg-white border rounded-md mb-4"
>
    {#each $categoryMenu as cat, index}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
        <li class="w-full border-b rounded-t-lg h-full">
            <div class="flex items-center ps-3">
                <input
                    id={`cat-${index}`}
                    type="checkbox"
                    checked={cat.state}
                    class="text-gray-700 w-5 h-5 bg-gray-100 border-gray-300 rounded"
                    on:click={() => handleCategoryClick(index)}
                />
                <label
                    for={`cat-${index}`}
                    class="w-full py-3 ms-2 text-sm font-medium text-gray-900 capitalize"
                >
                    <span
                        class={`bg-${cat.color} inline-block w-2.5 h-2.5 mr-1 mx-2 rounded-full`}
                    ></span>
                    {cat.cat}
                </label>
            </div>
        </li>
    {/each}
</ul>
