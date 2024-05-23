<script>
    // @ts-nocheck

    // @ts-ignore

    import { onMount } from 'svelte'
    import { breadcrumb } from '../stores/navigation'
    import { productParams } from '../stores/params'

    import Breadcrumb from '../components/header/breadcrumb.svelte'
    import TopSpacer from '../components/utility/top_spacer.svelte'
    import DefaultLayout from '../layouts/default_layout.svelte'
    import Gallery from '../components/products/gallery.svelte'
    import Dispensers from '../components/products/dispensers.svelte'
    import ProductDetails from '../components/products/product_details.svelte'
    import ProductCatalogue from '../components/products/product_catalogue.svelte'

    export let params

    // SET BREADCRUMBS AND UPDATE PARAMETER STORE

    onMount(() => {
        if (!params) {
            breadcrumb.set([{ title: 'Products', link: '/products' }])
        }
    })

    // WRITE PARAMS TO STORE

    function updateParams(params) {
        if (params) {
            let query = params.split(':')
            productParams.set(query)
        } else {
            productParams.set([])
        }
    }

    // UPDATE PARAMS ON CHANGE

    $: updateParams(params)
</script>

<DefaultLayout>
    <TopSpacer />
    <Breadcrumb />

    <!-- COMPONENT SWITCH VIEW -->

    {#if $productParams[0] === 'dispensers'}
        <Dispensers />
    {:else if $productParams[0] === 'details'}
        <ProductDetails params={$productParams[1]} />
    {:else if $productParams[0] === 'catalogue'}
        <ProductCatalogue />
    {:else}
        <Gallery />
    {/if}
</DefaultLayout>
