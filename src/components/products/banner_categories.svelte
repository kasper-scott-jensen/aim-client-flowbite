<script>
    import { link } from 'svelte-routing'
    import BrandList from './brand_list.svelte'

    let imgSrc1 = '/img/airbox.webp'
    let imgSrc2 = '/img/aimpath.webp'
    let imgSrc3 = '/img/tcp.webp'
</script>

<div class="mt-6">
    <div
        class="grid gap-6 grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 mt-6"
    >
        <!-- AIRBOX -->

        <a
            href="/products/details?9410"
            class="group border-2 border-gray-900 rounded-md"
        >
            <div
                class="relative flex flex-col w-full bg-gray-100 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 justify-center items-center h-full"
            >
                <BrandList
                    displayIcons={[true, false, true, false, true, true]}
                />
                <img
                    class="rounded-t-lg max-h-64"
                    src={imgSrc1}
                    alt="product"
                />
                <div class="px-8 py-8 bg-gray-200 w-full h-full">
                    <div class="flex items-center mb-3">
                        <p
                            class="bg-gray-900 text-white text-md font-semibold inline-flex items-center p-1.5 px-2.5 rounded dark:bg-blue-200 dark:text-blue-800"
                        >
                            # 9302
                        </p>
                    </div>
                    <div class="flex items-center mt-2.5 mb-2.5">
                        <div class="flex items-center">
                            <span
                                class="bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300"
                            >
                                Syringe
                            </span>
                            <span
                                class="bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300"
                            >
                                Cartridge
                            </span>
                            <span
                                class="bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300"
                            >
                                2K
                            </span>
                        </div>
                    </div>
                    <h5
                        class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white pt-2"
                    >
                        Precision Dispensing Controller
                    </h5>
                    <div class="flex items-end justify-between">
                        <span
                            class="text-3xl font-bold text-gray-900 dark:text-white group-hover:text-primary-700 group-hover:underline"
                        >
                            AirBox
                        </span>
                    </div>
                </div>
            </div>
        </a>

        <!-- AIMPATH -->
        <a
            href="/products/details?9410"
            class="group border-2 border-gray-900 rounded-md"
        >
            <div
                class="relative flex flex-col w-full bg-gray-100 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 justify-center items-center h-full"
            >
                <BrandList
                    displayIcons={[true, false, true, false, true, true]}
                />
                <img
                    class="p-8 rounded-t-lg max-h-64"
                    src={imgSrc2}
                    alt="product"
                />
                <div class="px-8 py-8 bg-gray-200 w-full h-full">
                    <div class="flex items-center mb-3">
                        <p
                            class="bg-gray-900 text-white text-md font-semibold inline-flex items-center p-1.5 px-2.5 rounded dark:bg-blue-200 dark:text-blue-800"
                        >
                            # 9503
                        </p>
                    </div>
                    <div class="flex items-center mt-2.5 mb-2.5">
                        <div class="flex items-center">
                            <span
                                class="bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300"
                            >
                                Recording
                            </span>
                            <span
                                class="bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300"
                            >
                                Playback
                            </span>
                        </div>
                    </div>
                    <h5
                        class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white pt-2"
                    >
                        Path Logging and Translation
                    </h5>
                    <div class="flex items-end justify-between">
                        <span
                            class="text-3xl font-bold text-gray-900 dark:text-white group-hover:text-primary-700 group-hover:underline"
                        >
                            AimPath URCap
                        </span>
                    </div>
                </div>
            </div>
        </a>

        <!-- TCP -->
        <a
            href="/products/details?9410"
            class="group border-2 border-gray-900 rounded-md"
        >
            <div
                class="relative flex flex-col w-full bg-gray-100 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 justify-center items-center h-full"
            >
                <BrandList
                    displayIcons={[true, false, true, false, true, true]}
                />
                <img
                    class="rounded-t-lg max-h-64"
                    src={imgSrc3}
                    alt="product"
                />
                <div class="px-8 py-8 bg-gray-200 w-full h-full">
                    <div class="flex items-center mb-3">
                        <p
                            class="bg-gray-900 text-white text-md font-semibold inline-flex items-center p-1.5 px-2.5 rounded dark:bg-blue-200 dark:text-blue-800"
                        >
                            # 9226
                        </p>
                    </div>
                    <div class="flex items-center mt-2.5 mb-2.5">
                        <div class="flex items-center">
                            <span
                                class="bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300"
                            >
                                Detect Tip
                            </span>
                            <span
                                class="bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300"
                            >
                                Calibrate Center
                            </span>
                        </div>
                    </div>
                    <h5
                        class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white pt-2"
                    >
                        Center Point Calibration
                    </h5>
                    <div class="flex items-end justify-between">
                        <span
                            class="text-3xl font-bold text-gray-900 dark:text-white group-hover:text-primary-700 group-hover:underline"
                        >
                            TCP Calibration Tool
                        </span>
                    </div>
                </div>
            </div>
        </a>
    </div>
</div>
