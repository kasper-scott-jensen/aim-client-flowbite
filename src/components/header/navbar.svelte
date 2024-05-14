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
            <button
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                Get started
            </button>
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
