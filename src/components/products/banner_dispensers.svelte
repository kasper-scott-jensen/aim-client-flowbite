<script>
    import { link } from 'svelte-routing'
</script>

<!-- BANNER -->

<div class="mx-auto group mt-6 banner-container">
    <a
        use:link
        href="/products/dispensers"
        class="p-8 bg-local bg-primary-800 bg-center bg-no-repeat bg-cover rounded-lg bg-blend-soft-light hover:bg-blend-screen flex flex-col w-full h-full py-32 shadow-md stripes"
        style="background-image: url(/bg/dispenser_sd.webp)"
    >
        <h2
            class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-white"
        >
            Cutting-Edge Dispensers
        </h2>
        <p class="text-white mb-4">
            Discover the World of Innovative High Precision Dispensing Solutions
        </p>
        <button
            type="button"
            class="flex items-center text-sm font-medium text-center text-white border-white rounded-lg group-hover:underline"
        >
            Meet our Line-Up
            <svg
                class="w-3 h-3 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
            >
                <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                />
            </svg>
        </button>
    </a>
</div>

<style>
    .banner-container {
        position: relative;
    }

    .stripes::before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        width: 30%;
        background: repeating-linear-gradient(
            -45deg,
            rgba(255, 255, 255, 0.3),
            rgba(255, 255, 255, 0.3) 10px,
            rgba(0, 0, 0, 0) 60px,
            rgba(0, 0, 0, 0) 60px
        );
        mask-image: linear-gradient(to right, transparent, black);
        pointer-events: none;
        z-index: 1;
    }

    a.stripes {
        position: relative;
        overflow: hidden;
    }

    a.stripes > * {
        position: relative;
        z-index: 2;
    }
</style>
