<script>
    import { onMount } from 'svelte'
    import { breadcrumb } from '../../stores/navigation'
    import { link } from 'svelte-routing'

    import BannerCatalogue from './banner_catalogue.svelte'
    import BrandList from './brand_list.svelte'

    let imgSrc1 = '/img/sd_30_55.webp'
    let imgSrc2 = '/img/fd_highv.webp'
    let imgSrc3 = '/img/fd_310.webp'
    let imgSrc4 = '/img/fd_400.webp'

    onMount(() => {
        breadcrumb.set([
            { title: 'Products', link: '/products' },
            { title: 'Dispensers', link: '/products/dispensers' },
        ])
    })
</script>

<section class="pt-2 pb-24">
    <div class="px-4 mx-auto max-w-screen-2xl lg:px-6">
        <!-- TOP SECTION -->

        <div class="mx-auto max-w-screen-sm text-center mb-6 lg:mb-10">
            <h2
                class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900"
            >
                Meet Our Line-Up
            </h2>
            <p class="font-light text-gray-500 md:text-lg">
                Our tools are truly Plug&Play – fast to install and easy to set
                up. This means fast deployment and zero headaches.
            </p>
        </div>

        <!-- PRESENTATION -->

        <div class="my-6">
            <div
                class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 mt-6"
            >
                <!-- 1 -->
                <a
                    href="/products/details?9410"
                    class="group border-2 border-gray-900 rounded-md"
                >
                    <div
                        class="relative flex flex-col w-full bg-gray-100 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 justify-center items-center h-full"
                    >
                        <BrandList
                            displayIcons={[
                                true,
                                false,
                                true,
                                false,
                                true,
                                true,
                            ]}
                        />
                        <img
                            class="p-4 rounded-t-lg max-h-96"
                            src={imgSrc1}
                            alt="product"
                        />
                        <div class="px-8 py-8 bg-gray-200 w-full h-full">
                            <div class="flex items-center mb-3">
                                <p
                                    class="bg-gray-900 text-white text-md font-semibold inline-flex items-center p-1.5 px-2.5 rounded dark:bg-blue-200 dark:text-blue-800"
                                >
                                    # 9410
                                </p>
                            </div>
                            <div class="flex items-center mt-2.5 mb-2.5">
                                <div class="flex items-center">
                                    <span
                                        class="bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300"
                                    >
                                        Adhesives
                                    </span>
                                    <span
                                        class="bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300"
                                    >
                                        Silicones
                                    </span>
                                </div>
                            </div>
                            <h5
                                class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white pt-2"
                            >
                                Airless Syringe Dispenser
                            </h5>
                            <div class="flex items-end justify-between">
                                <span
                                    class="text-3xl font-bold text-gray-900 dark:text-white group-hover:text-primary-700 group-hover:underline"
                                >
                                    SD 30/55
                                </span>
                            </div>
                        </div>
                    </div>
                </a>

                <!-- 2 -->

                <a
                    href="/products/details?9410"
                    class="group border-2 border-gray-900 rounded-md"
                >
                    <div
                        class="relative flex flex-col w-full bg-gray-100 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 justify-center items-center h-full"
                    >
                        <BrandList
                            displayIcons={[true, true, true, true, true, true]}
                        />
                        <img
                            class="p-4 rounded-t-lg max-h-96"
                            src={imgSrc2}
                            alt="product"
                        />
                        <div class="px-8 py-8 bg-gray-200 w-full h-full">
                            <div class="flex items-center mb-3">
                                <p
                                    class="bg-gray-900 text-white text-md font-semibold inline-flex items-center p-1.5 px-2.5 rounded dark:bg-blue-200 dark:text-blue-800"
                                >
                                    # 9027
                                </p>
                            </div>
                            <div class="flex items-center mt-2.5 mb-2.5">
                                <div class="flex items-center">
                                    <span
                                        class="bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300"
                                    >
                                        Greases
                                    </span>
                                    <span
                                        class="bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300"
                                    >
                                        Silicones
                                    </span>
                                </div>
                            </div>
                            <h5
                                class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white pt-2"
                            >
                                External Feed Dispenser
                            </h5>
                            <div class="flex items-end justify-between">
                                <span
                                    class="text-3xl font-bold text-gray-900 dark:text-white group-hover:text-primary-700 group-hover:underline"
                                >
                                    FD HighV
                                </span>
                            </div>
                        </div>
                    </div>
                </a>

                <!-- 3 -->

                <a
                    href="/products/details?9410"
                    class="group border-2 border-gray-900 rounded-md"
                >
                    <div
                        class="relative flex flex-col w-full bg-gray-100 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 justify-center items-center h-full"
                    >
                        <BrandList
                            displayIcons={[true, false, true, true, true, true]}
                        />
                        <img
                            class="p-4 rounded-t-lg max-h-96"
                            src={imgSrc3}
                            alt="product"
                        />
                        <div class="px-8 py-8 bg-gray-200 w-full h-full">
                            <div class="flex items-center mb-3">
                                <p
                                    class="bg-gray-900 text-white text-md font-semibold inline-flex items-center p-1.5 px-2.5 rounded dark:bg-blue-200 dark:text-blue-800"
                                >
                                    # 9000
                                </p>
                            </div>
                            <div class="flex items-center mt-2.5 mb-2.5">
                                <div class="flex items-center">
                                    <span
                                        class="bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300"
                                    >
                                        Adhesives
                                    </span>
                                    <span
                                        class="bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300"
                                    >
                                        Silicones
                                    </span>
                                </div>
                            </div>
                            <h5
                                class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white pt-2"
                            >
                                Airless cartridge dispenser
                            </h5>
                            <div class="flex items-end justify-between">
                                <span
                                    class="text-3xl font-bold text-gray-900 dark:text-white group-hover:text-primary-700 group-hover:underline"
                                >
                                    FD 310
                                </span>
                            </div>
                        </div>
                    </div>
                </a>

                <!-- 4 -->
                <a
                    href="/products/details?9410"
                    class="group border-2 border-gray-900 rounded-md"
                >
                    <div
                        class="relative flex flex-col w-full bg-gray-100 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 justify-center items-center h-full"
                    >
                        <BrandList
                            displayIcons={[
                                true,
                                true,
                                true,
                                false,
                                false,
                                false,
                            ]}
                        />
                        <img
                            class="p-4 rounded-t-lg max-h-96"
                            src={imgSrc4}
                            alt="product"
                        />
                        <div class="px-8 py-8 bg-gray-200 w-full h-full">
                            <div class="flex items-center mb-3">
                                <p
                                    class="bg-gray-900 text-white text-md font-semibold inline-flex items-center p-1.5 px-2.5 rounded dark:bg-blue-200 dark:text-blue-800"
                                >
                                    # 9044
                                </p>
                            </div>
                            <div class="flex items-center mt-2.5 mb-2.5">
                                <div class="flex items-center">
                                    <span
                                        class="bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300"
                                    >
                                        Adhesives
                                    </span>
                                    <span
                                        class="bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300"
                                    >
                                        Silicones
                                    </span>
                                </div>
                            </div>
                            <h5
                                class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white pt-2"
                            >
                                Cartridge dispenser
                            </h5>
                            <div class="flex items-end justify-between">
                                <span
                                    class="text-3xl font-bold text-gray-900 dark:text-white group-hover:text-primary-700 group-hover:underline"
                                >
                                    FD 400
                                </span>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>

        <!-- BANNER CATELOGUE -->

        <BannerCatalogue />
    </div>
</section>
