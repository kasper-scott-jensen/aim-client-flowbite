<script>
    import { link } from 'svelte-routing'

    let imgSrc1 = '/img/sd_30_55.webp'
    let imgSrc2 = '/img/fd_highv.webp'
</script>

<section class="">
    <div
        class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-2xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6"
    >
        <!-- LEFT SECTION -->

        <div class="font-light text-gray-500 sm:text-lg">
            <h2
                class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900"
            >
                Enhancing Confidence in Automated Dispensing Systems
            </h2>
            <p class="mb-4">
                We are committed to simplifying the dispensing process and
                boosting confidence in automated systems. Our goal is to provide
                the most precise automated fluid dispensing solutions and
                software tools designed specifically for collaborative robots
                (cobots). Our offerings ensure high repeatability and enhanced
                quality control in production through advanced electronic
                control systems.
            </p>
            <a
                use:link
                href="/products/dispensers"
                class="hidden xl:inline-flex items-center text-lg font-medium text-[#00adee] hover:underline pt-2"
            >
                Our Cutting-Edge Dispensers
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
            </a>
        </div>

        <!-- IMAGES -->

        <div class="grid grid-cols-2 gap-4 mt-8">
            <img
                class="w-full rounded-lg bg-gray-100 py-4 shadow-md border-2 border-gray-900 rounded-md"
                src={imgSrc1}
                alt="SD3055"
            />
            <img
                class="w-full lg:mt-24 xl:mt-48 rounded-lg bg-gray-900 py-4 pt-0 shadow-md"
                src={imgSrc2}
                alt="FD310"
            />
        </div>
    </div>
</section>
