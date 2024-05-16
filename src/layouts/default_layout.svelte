<script>
    import Navbar from '../components/header/navbar.svelte'
    import Footer from '../components/footer/footer.svelte'
</script>

<div class="flex flex-col">
    <Navbar />
    <div class="tw-background">
        <div class="bg-white bg-opacity-80">
            <slot />
        </div>
    </div>
    <Footer />
</div>

<style>
    .tw-background {
        position: relative;
        top: 0;
        width: 100%;
        overflow: hidden;
    }

    .tw-background::before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-image: url('/bg/abstract.webp');
        background-size: cover;
        background-position: top right;
        filter: blur(10px);
        z-index: -1;
    }

    .tw-background .bg-white {
        position: relative;
        z-index: 0;
    }
</style>
