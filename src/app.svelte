<script>
    // @ts-nocheck

    import './css/main.css'
    import './css/tailwind.css'
    import '../node_modules/flowbite/dist/flowbite.min.js'
    import '../firebase.config.js'

    import { Router, Route } from 'svelte-routing'
    import { onMount } from 'svelte'
    import {
        fetchPartnersFromApi,
        fetchProductsFromApi,
    } from './js/init_api_data.js'

    import Home from './pages/home.svelte'
    import Products from './pages/products.svelte'
    import NotFound from './pages/404.svelte'
    import LoadingScreen from './components/utility/loading_screen.svelte'

    // ROUTES FOR NAVIGATION

    const routes = [
        { path: '*', component: NotFound },
        { path: '/', component: Home },

        { path: '/products', component: Products },
        { path: '/products/:params', component: Products },

        { path: '/applications', component: null },
        { path: '/applications/:params', component: null },

        { path: '/knowledge-center', component: null },
        { path: '/knowledge-center/:params', component: null },

        { path: '/about', component: null },

        { path: '/network', component: null },
        { path: '/network/:params', component: null },

        { path: '/support', component: null },

        { path: '/contact', component: null },
        { path: '/privacy-policy', component: null },
        { path: '/terms-and-conditions', component: null },
    ]

    // INIT STATE AND LOAD HANDLING

    let isLoading = true

    onMount(async () => {
        try {
            await fetchProductsFromApi()
            await fetchPartnersFromApi()
        } finally {
            isLoading = false
        }
    })
</script>

<!-- ROUTER -->

{#if isLoading}
    <LoadingScreen />
{:else}
    <Router>
        {#each routes as { path, component }}
            <Route {path} let:params>
                <svelte:component this={component} {...params} />
            </Route>
        {/each}
    </Router>
{/if}
