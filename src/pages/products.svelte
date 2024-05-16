<script>
    import { onMount } from 'svelte'
    import { breadcrumb } from '../stores/navigation'
    import { productsParams } from '../stores/params'

    import Breadcrumb from '../components/header/breadcrumb.svelte'
    import TopSpacer from '../components/utility/top_spacer.svelte'
    import DefaultLayout from '../layouts/default_layout.svelte'
    import Gallery from '../components/products/gallery.svelte'
    import Dispensers from '../components/products/dispensers.svelte'
    import ProductDetails from '../components/products/product_details.svelte'

    export let params

    // SET BREADCRUMBS AND UPDATE PARAMETER STORE

    onMount(() => {
        if (!params) {
            breadcrumb.set([{ title: 'Products', link: '/products' }])
        }
        updateParams(params)
    })

    // WRITE PARAMS TO STORE

    function updateParams(params) {
        if (params) {
            let splitParams = params.split('?')
            productsParams.set(splitParams)
        } else {
            productsParams.set([])
        }
    }

    // UPDATE PARAMS ON CHANGE

    $: updateParams(params)
</script>

<DefaultLayout>
    <TopSpacer />
    <Breadcrumb />

    <!-- COMPONENT SWITCH VIEW -->

    {#if $productsParams[0] === 'dispensers'}
        <Dispensers />
    {:else if $productsParams[0] === 'details'}
        <ProductDetails number={$productsParams[1]} />
    {:else}
        <Gallery />
    {/if}
</DefaultLayout>
