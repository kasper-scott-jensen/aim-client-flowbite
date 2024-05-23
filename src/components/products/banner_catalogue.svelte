<script>
    import { link } from 'svelte-routing'
</script>

<!-- BANNER -->

<div class="mx-auto group">
    <a
        use:link
        href="/products/catalogue"
        class="p-8 bg-local bg-gray-500 bg-center bg-no-repeat bg-cover rounded-lg bg-blend-multiply hover:bg-blend-soft-light flex flex-col w-full h-full py-10 shadow-md"
        style="background-image: url(/img/made_by_aim.webp)"
    >
        <h2
            class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-white"
        >
            Product Catalogue
        </h2>
        <p class=" text-white mb-4">
            Browse through a complete overview of our products and solutions.
        </p>
        <button
            type="button"
            class="flex items-center text-sm font-medium text-center text-white border-white rounded-lg group-hover:underline"
        >
            Get Started
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
