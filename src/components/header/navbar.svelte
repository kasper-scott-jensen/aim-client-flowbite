<script>
    import { onMount } from 'svelte'
    import { megaMenuStates } from '../../stores/navigation'
    import { link } from 'svelte-routing'

    import LinkList from './link_list.svelte'
    import MegaMenus from './mega_menus.svelte'

    let logoSrc = '/logo/aimrobotics/logo_full_black.webp'

    function handleClickOutsideNavbar(event) {
        const menuContainer = document.querySelector('#menu-container')
        if (menuContainer && !menuContainer.contains(event.target)) {
            closeAllMegaMenus()
            console.log($megaMenuStates)
        }
    }

    function closeAllMegaMenus() {
        megaMenuStates.update((states) => states.map(() => false))
    }

    onMount(() => {
        window.addEventListener('click', handleClickOutsideNavbar)
        return () => {
            window.removeEventListener('click', handleClickOutsideNavbar)
        }
    })
</script>

<nav
    class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600"
    id="menu-container"
>
    <div
        class="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
        <a
            use:link
            href="/"
            class="flex items-center space-x-3 rtl:space-x-reverse"
        >
            <img src={logoSrc} class="h-10" alt="Flowbite Logo" />
        </a>
        <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <a
                use:link
                href="/contact"
                class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-[#00adee] hover:bg-[#00adee]/90 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
                <svg
                    class="mr-2 -ml-1 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                        clip-rule="evenodd"
                    ></path>
                </svg>
                Contact Us
            </a>
            <button
                data-collapse-toggle="navbar-sticky"
                type="button"
                class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-sticky"
                aria-expanded="false"
            >
                <span class="sr-only">Open main menu</span>
                <svg
                    class="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 17 14"
                >
                    <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 1h15M1 7h15M1 13h15"
                    />
                </svg>
            </button>
        </div>
        <LinkList />
    </div>
    <MegaMenus />
</nav>
