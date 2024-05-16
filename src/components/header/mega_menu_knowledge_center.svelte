<script>
    import { link } from 'svelte-routing'
</script>

<div
    id="mega-menu-full-dropdown"
    class="mt-1 bg-white border-gray-200 shadow-sm border-y"
>
    <div
        class="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 sm:grid-cols-2 md:grid-cols-3 md:px-6"
    >
        <!-- LINKS -->

        <ul>
            <li>
                <a
                    use:link
                    href="/products/dispensers"
                    class="block p-3 rounded-lg hover:bg-gray-50"
                >
                    <div class="font-semibold">Testing</div>
                    <span class="text-sm text-gray-500">
                        Request a test or try out our dispensing calculator
                    </span>
                </a>
            </li>
            <li>
                <a
                    use:link
                    href="/products/airbox"
                    class="block p-3 rounded-lg hover:bg-gray-50"
                >
                    <div class="font-semibold">Documentation</div>
                    <span class="text-sm text-gray-500">
                        Datasheets, manuals and 3D-files
                    </span>
                </a>
            </li>
            <li>
                <a
                    use:link
                    href="/products/airbox"
                    class="block p-3 rounded-lg hover:bg-gray-50"
                >
                    <div class="font-semibold">FAQ</div>
                    <span class="text-sm text-gray-500">
                        Frequently asked questions
                    </span>
                </a>
            </li>
        </ul>
        <ul>
            <li>
                <a
                    use:link
                    href="/products/accessories"
                    class="block p-3 rounded-lg hover:bg-gray-50"
                >
                    <div class="font-semibold">Guides</div>
                    <span class="text-sm text-gray-500">
                        Setup guides and videos
                    </span>
                </a>
            </li>
            <li>
                <a
                    use:link
                    href="#!"
                    class="block p-3 rounded-lg hover:bg-gray-50"
                >
                    <div class="font-semibold">
                        Showcase
                        <span
                            class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-1 rounded ms-2"
                        >
                            Coming Soon
                        </span>
                    </div>
                    <span class="text-sm text-gray-500">
                        Comprehensive presentation of setups
                    </span>
                </a>
            </li>
            <li>
                <a
                    use:link
                    href="/products/replacement-parts"
                    class="block p-3 rounded-lg hover:bg-gray-50"
                >
                    <div class="font-semibold">Supported Cobots</div>
                    <span class="text-sm text-gray-500">
                        Our progress towards full compatibility
                    </span>
                </a>
            </li>
        </ul>

        <!-- RIGHT IMAGE AND LINKS -->

        <a
            use:link
            href="/knowledge-center"
            class="p-8 bg-local bg-gray-500 bg-center bg-no-repeat bg-cover rounded-lg bg-blend-multiply hover:bg-blend-soft-light group"
            style="background-image: url(/img/learning_lots.webp)"
        >
            <p
                class="max-w-xl mb-5 font-extrabold leading-tight tracking-tight text-white"
            >
                Aim Robotics Knowledge Center
            </p>
            <p class=" text-white mb-5">
                Your go-to hub for insight, documentation and guides.
            </p>
            <button
                type="button"
                class="inline-flex items-center text-sm font-medium text-center text-white border-white rounded-lg group-hover:underline"
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
</div>
