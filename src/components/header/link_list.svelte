<script>
    import { megaMenuStates } from '../../stores/navigation'

    function toggleMegaMenu(index) {
        megaMenuStates.update((states) => {
            states[index] = !states[index]
            if (states[index]) {
                states = states.map((_, i) => i === index)
            }
            return states
        })
        console.log($megaMenuStates)
    }
</script>

<div
    class="items-center justify-between hidden w-full lg:flex md:w-auto md:order-1"
    id="navbar-sticky"
>
    <ul
        class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white"
    >
        <li>
            <a
                on:click|preventDefault={() => toggleMegaMenu(0)}
                href="!#"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
            >
                Products
            </a>
        </li>
        <li>
            <a
                on:click|preventDefault={() => toggleMegaMenu(1)}
                href="!#"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
            >
                Applications
            </a>
        </li>
        <li>
            <a
                on:click|preventDefault={() => toggleMegaMenu(2)}
                href="!#"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
            >
                Knowledge Center
                <span
                    class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-1 rounded ms-2"
                >
                    New
                </span>
            </a>
        </li>
        <li>
            <a
                href="!#"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
            >
                About
            </a>
        </li>
        <li>
            <a
                href="!#"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
            >
                Network
            </a>
        </li>
        <li>
            <a
                href="!#"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
            >
                Support
            </a>
        </li>
    </ul>
</div>
