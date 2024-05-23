<script>
    import { onMount } from 'svelte'
    import { derived } from 'svelte/store'
    import { breadcrumb } from '../../stores/navigation.js'
    import {
        categoryMenu,
        searchText,
        sortingIndex,
    } from '../../stores/product_catalogue.js'
    import { products } from '../../stores/rackbeat.js'

    import ProductCardCompact from './product_card_compact.svelte'
    import CatelogueSidebar from './catalogue_sidebar.svelte'

    export let params = ''

    let fallbackImg = '/img/fallback.webp'

    // HANDLE NAVIGATION WITH PARAMS

    function handleParams() {
        if (params && params !== '') {
            handleClearCategoriesMenu()
            categoryMenu.update((menu) => {
                return menu.map((item) => {
                    if (params === item.cat) {
                        return { ...item, state: true }
                    }
                    return item
                })
            })
        }
    }

    // SEARCH / CATEGORY

    let filteredProducts = derived(
        [products, searchText, categoryMenu, sortingIndex],
        ([$products, $searchText, $categoryMenu, $sortingIndex]) => {
            let lowerCaseSearchText = $searchText.trim().toLowerCase()
            let activeCategoryIndices = $categoryMenu.reduce(
                (acc, cur, index) => {
                    if (cur.state) acc.push(index)
                    return acc
                },
                [],
            )
            let items = $products.filter((product) => {
                let searchTextMatch =
                    product.id.toLowerCase().includes(lowerCaseSearchText) ||
                    product.name.toLowerCase().includes(lowerCaseSearchText)
                let categoryMatch =
                    activeCategoryIndices.length === 0 ||
                    activeCategoryIndices.includes(product.category_id - 1)
                return searchTextMatch && categoryMatch
            })

            // Sorting logic
            const sortProperties = ['name', 'id']
            const sortProperty =
                sortProperties[$sortingIndex % sortProperties.length]
            items.sort((a, b) => {
                if (a[sortProperty] < b[sortProperty]) {
                    return -1
                } else if (a[sortProperty] > b[sortProperty]) {
                    return 1
                }
                return 0
            })

            return items
        },
    )

    // CLEAR-UP FUNCTIONS

    function handleClearCategoriesMenu() {
        categoryMenu.update((categories) =>
            categories.map((cat) => ({
                ...cat,
                state: false,
            })),
        )
    }

    function handleClearSearch() {
        searchText.set('')
    }

    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            handleClearCategoriesMenu()
            handleClearSearch()
        }
    })

    // RESET ON MOUNT

    onMount(() => {
        handleParams()
        // handleClearCategoriesMenu()
        // handleClearSearch()
        breadcrumb.set([
            { title: 'Products', link: '/products' },
            { title: 'Catalogue', link: '/products/catalogue' },
        ])
    })
</script>

<section class="pt-2 pb-24">
    <div class="px-4 mx-auto max-w-screen-2xl lg:px-6">
        <div class="mx-auto max-w-screen-sm text-center mb-6 lg:mb-10">
            <h2
                class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900"
            >
                Product Catalogue
            </h2>
            <p class="font-light text-gray-500 md:text-lg">
                Browse through a complete overview of our products and
                solutions.
            </p>
        </div>
        <div class="flex">
            <div class="w-1/5 bg-none">
                <CatelogueSidebar />
            </div>
            <div class="w-4/5 ps-4 lg:ps-12">
                <div
                    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                >
                    {#each $filteredProducts as product}
                        <ProductCardCompact
                            name={product.name}
                            id={product.id}
                            categoryId={product.category_id}
                            category={product.category}
                            img={product.media.img_url || fallbackImg}
                            url={`/products/details?${product.id}`}
                        />
                    {/each}
                </div>
            </div>
        </div>
    </div>
</section>
