<script>
    import { link } from 'svelte-routing'
</script>

<div
    id="mega-menu-full-dropdown"
    class="mt-1 bg-white border-gray-200 shadow-sm border-y dark:bg-gray-800 dark:border-gray-600"
>
    <div
        class="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:grid-cols-3 md:px-6"
    >
        <ul>
            <li>
                <a
                    use:link
                    href="/applications/industries"
                    class="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                    <div class="font-semibold">Industries</div>
                    <span class="text-sm text-gray-500 dark:text-gray-400">
                        The importance of dispensing in various sectors
                    </span>
                </a>
            </li>
            <li>
                <a
                    use:link
                    href="/applications/use-cases"
                    class="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                    <div class="font-semibold">Use Cases</div>
                    <span class="text-sm text-gray-500 dark:text-gray-400">
                        Deep dive into previous clients and their setups
                    </span>
                </a>
            </li>
        </ul>
        <ul>
            <li>
                <a
                    use:link
                    href="/applications/cobots"
                    class="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                    <div class="font-semibold">Cobots</div>
                    <span class="text-sm text-gray-500 dark:text-gray-400">
                        Collaborative robots and their usefulness
                    </span>
                </a>
            </li>
            <li>
                <a
                    use:link
                    href="/applications/clients"
                    class="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                    <div class="font-semibold">Our Clients</div>
                    <span class="text-sm text-gray-500 dark:text-gray-400">
                        Trust and collaboration across the world
                    </span>
                </a>
            </li>
        </ul>
        <div class="mt-4 md:mt-2">
            <h2 class="mb-2 font-semibold text-gray-900 dark:text-white">
                For more information
            </h2>
            <p class="mb-2 text-gray-500 dark:text-gray-400">
                Do not hesitate to contact us with questions about a specific
                setup or application.
            </p>
            <a
                use:link
                href="/contact"
                class="inline-flex items-center text-sm font-medium text-blue-600 hover:underline hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-700"
            >
                Contact Us
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
    </div>
</div>
