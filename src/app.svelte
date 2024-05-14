<script>
    // @ts-nocheck

    import './css/main.css'
    import './css/tailwind.css'
    import '../node_modules/flowbite/dist/flowbite.min.js'
    import '../firebase.config.js'

    import { Router, Route } from 'svelte-routing'
    import { onMount } from 'svelte'

    import Home from './pages/home.svelte'

    // ROUTES FOR NAVIGATION

    const routes = [
        { path: '*', component: null },
        { path: '/', component: Home },

        { path: '/products', component: null },
        { path: '/products/:id', component: null },

        { path: '/applications', component: null },
        { path: '/applications/:id', component: null },

        { path: '/knowledge-center', component: null },
        { path: '/knowledge-center/:id', component: null },

        { path: '/about', component: null },

        { path: '/network', component: null },
        { path: '/network/:id', component: null },

        { path: '/support', component: null },

        { path: '/contact', component: null },
        { path: '/privacy-policy', component: null },
        { path: '/terms-and-conditions', component: null },
    ]

    // INIT STATE AND LOAD HANDLING

    let isLoading = true

    onMount(async () => {
        try {
            //
        } finally {
            isLoading = false
        }
    })
</script>

<!-- ROUTER -->

{#if isLoading}
    <!-- -->
{:else}
    <Router>
        {#each routes as { path, component }}
            <Route {path} let:params>
                <svelte:component this={component} {...params} />
            </Route>
        {/each}
    </Router>
{/if}
