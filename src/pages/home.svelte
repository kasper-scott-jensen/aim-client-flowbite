<script>
    import DefaultLayout from '../layouts/default_layout.svelte'
    import Hero from '../components/home/hero.svelte'
    import Presentation from '../components/home/presentation.svelte'
    import Features from '../components/home/features.svelte'
    import CTA from '../components/home/cta.svelte'
    import TopSpacer from '../components/utility/top_spacer.svelte'
</script>

<DefaultLayout>
    <TopSpacer />
    <Hero />
    <Presentation />
    <Features />
    <CTA />
</DefaultLayout>
