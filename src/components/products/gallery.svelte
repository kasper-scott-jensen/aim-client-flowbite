<script>
    import BannerCatalogue from './banner_catalogue.svelte'
    import BannerCategories from './banner_categories.svelte'
    import BannerOther from './banner_other.svelte'
    import BannerDispensers from './banner_dispensers.svelte'
</script>

<section class="pt-4 pb-24">
    <div class="px-4 mx-auto max-w-screen-2xl">
        <!-- CATALOGUE -->

        <BannerCatalogue />

        <!-- DISPENSERS -->

        <BannerDispensers />

        <!-- CATEGORIES -->

        <BannerCategories />

        <!-- OTHER -->

        <BannerOther />
    </div>
</section>
