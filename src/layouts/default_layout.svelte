<script>
    import Navbar from '../components/header/navbar.svelte'
    import Footer from '../components/footer/footer.svelte'
</script>

<div class="flex flex-col">
    <Navbar />
    <div class="tw-background">
        <div class="bg-white bg-opacity-70">
            <slot />
        </div>
    </div>
    <Footer />
</div>

<style>
    .tw-background {
        position: relative;
        width: 100%;
        overflow: hidden;
    }

    .tw-background::before {
        content: '';
        position: absolute;
        top: -200px;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url('/bg/abstract.webp');
        background-repeat: no-repeat;
        background-size: 100%;
        filter: blur(40px);
        transform: rotate(0deg) scale(1) scaleX(1);
        z-index: -1;
    }

    .tw-background::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0) 50%,
            rgba(255, 255, 255, 1) 95%
        );
        z-index: 0;
    }

    .tw-background > .bg-white {
        position: relative;
        z-index: 1;
    }
</style>
