<script>
    import { products } from '../../stores/rackbeat.js'

    import ProductCard from './product_card.svelte'

    let airbox
    let aimpath
    let tcp

    $: {
        products.subscribe(($products) => {
            airbox = $products.find((p) => p.id === '9302')
            aimpath = $products.find((p) => p.id === '9503')
            tcp = $products.find((p) => p.id === '9226')
        })
    }
</script>

<div class="mt-6">
    <div
        class="grid gap-6 grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 mt-6"
    >
        <!-- AIRBOX -->

        <ProductCard
            img={airbox.media.img_url}
            id={airbox.id}
            badges={airbox.badges}
            nameSub={airbox.description.name_sub}
            name={airbox.name}
            url={'/products/details?9302'}
        />

        <!-- AIMPATH -->

        <ProductCard
            img={aimpath.media.img_url}
            id={aimpath.id}
            badges={aimpath.badges}
            nameSub={aimpath.description.name_sub}
            name={aimpath.name}
            url={'/products/details?9503'}
        />

        <!-- TCP -->

        <ProductCard
            img={tcp.media.img_url}
            id={tcp.id}
            badges={tcp.badges}
            nameSub={tcp.description.name_sub}
            name={tcp.name}
            url={'/products/details?9226'}
        />
    </div>
</div>
