<script>
    import { onMount } from 'svelte'
    import { breadcrumb } from '../stores/navigation'

    import DefaultLayout from '../layouts/default_layout.svelte'
    import Breadcrumb from '../components/header/breadcrumb.svelte'
    import TopSpacer from '../components/utility/top_spacer.svelte'
    import Jumbotron from '../components/404/jumbotron.svelte'

    onMount(() => {
        breadcrumb.set([{ title: '404', link: '' }])
    })
</script>

<DefaultLayout>
    <TopSpacer />
    <Breadcrumb />
    <Jumbotron />
</DefaultLayout>
