<script>
    import { link } from 'svelte-routing'
</script>

<div class="md:flex mt-6 w-full gap-6">
    <div class="mx-auto group w-full pb-6 md:pb-0">
        <a
            use:link
            href="/products/accessories"
            class="p-8 bg-local bg-gray-500 bg-center bg-no-repeat bg-cover rounded-lg bg-blend-multiply hover:bg-blend-soft-light flex flex-col w-full h-full py-12"
            style="background-image: url(/img/accessories.webp)"
        >
            <h2
                class="mb-4 text-3xl tracking-tight font-extrabold text-white dark:text-white"
            >
                Accessories
            </h2>
            <p class=" text-white mb-4">
                All our various kits and stand-alone parts
            </p>
            <button
                type="button"
                class="flex items-center text-sm font-medium text-center text-white border-white rounded-lg group-hover:underline"
            >
                Browse
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
    <div class="mx-auto group w-full">
        <a
            use:link
            href="/products/replacement-parts"
            class="p-8 bg-local bg-gray-500 bg-center bg-no-repeat bg-cover rounded-lg bg-blend-multiply hover:bg-blend-soft-light flex flex-col w-full h-full py-12"
            style="background-image: url(/img/parts.webp)"
        >
            <h2
                class="mb-4 text-3xl trcking-tight font-extrabold text-white dark:text-white"
            >
                Replacement Parts
            </h2>
            <p class=" text-white mb-4">Parts for fast and easy replacement</p>
            <button
                type="button"
                class="flex items-center text-sm font-medium text-center text-white border-white rounded-lg group-hover:underline"
            >
                Browse
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
</div>
