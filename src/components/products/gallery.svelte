<script>
    import { link } from 'svelte-routing'
</script>

<section class="pt-4 pb-24">
    <div class="px-4 mx-auto max-w-screen-2xl">
        <!-- CATALOGUE -->

        <div class="mx-auto group">
            <a
                use:link
                href="/products"
                class="p-8 bg-local bg-gray-500 bg-center bg-no-repeat bg-cover rounded-lg bg-blend-multiply hover:bg-blend-soft-light flex flex-col w-full h-full py-12"
                style="background-image: url(/img/made_by_aim.webp)"
            >
                <h2
                    class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-white dark:text-white"
                >
                    Product Catalogue
                </h2>
                <p class=" text-white mb-4">
                    Browse through a complete overview of our products and
                    solutions.
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

        <!-- CATEGORIES -->

        <div class="mt-6">
            <div
                class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 mt-6"
            >
                <!-- DISPENSERS -->

                <div
                    class="w-full mx-auto rounded-md overflow-hidden group cursor-pointer bg-gray-200 pt-4"
                >
                    <div
                        class="flex items-end justify-end h-64 w-full bg-cover group-hover:bg-blend-lighten"
                        style="background-image: url('/img/fd_310.webp'); background-size: contain; background-repeat: no-repeat; background-position: center center;"
                    ></div>
                    <div class="px-8 py-5 bg-gray-200 h-full">
                        <h3
                            class="text-xl font-bold text-gray-900 mb-1 group-hover:underline group-hover:text-primary-700"
                        >
                            Dispensers
                        </h3>
                        <span class="text-gray-500 mt-1">
                            Adaptable dispensers for a wide array of
                            applications
                        </span>
                    </div>
                </div>

                <!-- AirBox -->

                <div
                    class="w-full mx-auto rounded-md overflow-hidden group cursor-pointer bg-gray-200 pt-4"
                >
                    <div
                        class="flex items-end justify-end h-64 w-full group-hover:bg-blend-lighten"
                        style="background-image: url('/img/airbox.webp'); background-size: cover; background-repeat: no-repeat; background-position: center center;"
                    ></div>
                    <div class="px-8 py-5 bg-gray-200 h-full">
                        <h3
                            class="text-xl font-bold text-gray-900 mb-1 group-hover:underline group-hover:text-primary-700"
                        >
                            AirBox
                        </h3>
                        <span class="text-gray-500 mt-1">
                            Electric precision dispensing controllers
                        </span>
                    </div>
                </div>

                <!-- AimPath URCap -->

                <div
                    class="w-full mx-auto rounded-md overflow-hidden group cursor-pointer bg-gray-200 pt-4"
                >
                    <div
                        class="flex items-end justify-end h-64 w-full group-hover:bg-blend-lighten"
                        style="background-image: url('/img/aimpath.webp'); background-size: contain; background-repeat: no-repeat; background-position: center center;"
                    ></div>
                    <div class="px-8 py-5 bg-gray-200 h-full">
                        <h3
                            class="text-xl font-bold text-gray-900 mb-1 group-hover:underline group-hover:text-primary-700"
                        >
                            AimPath URCap
                        </h3>
                        <span class="text-gray-500 mt-1">
                            Task path logging and translation into waypoints
                        </span>
                    </div>
                </div>

                <!-- TCP -->

                <div
                    class="w-full mx-auto rounded-md overflow-hidden group cursor-pointer bg-gray-200 pt-4"
                >
                    <div
                        class="flex items-end justify-end h-64 w-full bg-blend-multiply group-hover:bg-blend-lighten"
                        style="background-image: url('/img/tcp.webp'); background-size: cover; background-repeat: no-repeat; background-position: center center;"
                    ></div>
                    <div class="px-8 py-5 bg-gray-200 h-full">
                        <h3
                            class="text-xl font-bold text-gray-900 mb-1 group-hover:underline group-hover:text-primary-700"
                        >
                            TCP Calibration Tool
                        </h3>
                        <span class="text-gray-500 mt-1">
                            Tip detection and center point calibration
                        </span>
                    </div>
                </div>
            </div>
        </div>

        <!-- OTHER -->

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
                    <p class=" text-white mb-4">
                        Parts for fast and easy replacement
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
        </div>
    </div>
</section>
