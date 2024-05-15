<script>
    import { onMount } from 'svelte'
    import { breadcrumb } from '../stores/navigation'

    import Breadcrumb from '../components/header/breadcrumb.svelte'
    import TopSpacer from '../components/utility/top_spacer.svelte'
    import DefaultLayout from '../layouts/default_layout.svelte'
    import Gallery from '../components/products/gallery.svelte'

    onMount(() => {
        breadcrumb.set([{ title: 'Products', link: '/products' }])
    })
</script>

<DefaultLayout>
    <TopSpacer />
    <Breadcrumb />
    <Gallery />
</DefaultLayout>
