<script>
    import { link } from 'svelte-routing'
</script>

<div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
    <div class="px-8">
        <h2
            class="mb-6 text-sm font-semibold text-white uppercase dark:text-white"
        >
            Navigation
        </h2>
        <ul class="text-white dark:text-gray-400 font-medium">
            <li class="mb-4">
                <a use:link href="/products" class="hover:underline">
                    Products
                </a>
            </li>
            <li class="mb-4">
                <a use:link href="/applications" class="hover:underline">
                    Applications
                </a>
            </li>
            <li class="mb-4">
                <a use:link href="/knowledge-center" class="hover:underline">
                    Knowledge Center
                </a>
            </li>
            <li class="mb-4">
                <a use:link href="/about" class="hover:underline">About</a>
            </li>
            <li class="mb-4">
                <a use:link href="/network" class="hover:underline">Network</a>
            </li>
        </ul>
    </div>
    <div class="px-8">
        <h2
            class="mb-6 text-sm font-semibold text-white uppercase dark:text-white"
        >
            Help and Inquiries
        </h2>
        <ul class="text-white dark:text-gray-400 font-medium">
            <li class="mb-4">
                <a use:link href="/contact" class="hover:underline">Contact</a>
            </li>
            <li class="mb-4">
                <a use:link href="/support" class="hover:underline">Support</a>
            </li>
            <li class="mb-4">
                <a
                    use:link
                    href="/knowledge-center/faq"
                    class="hover:underline"
                >
                    FAQ
                </a>
            </li>
            <li class="mb-4">
                <a use:link href="/privacy-policy" class="hover:underline">
                    Privacy Policy
                </a>
            </li>
            <li class="mb-4">
                <a
                    use:link
                    href="/terms-and-conditions"
                    class="hover:underline"
                >
                    Terms And Conditions
                </a>
            </li>
        </ul>
    </div>
    <div class="px-8">
        <h2
            class="mb-6 text-sm font-semibold text-white uppercase dark:text-white"
        >
            Network
        </h2>
        <ul class="text-white dark:text-gray-400 font-medium">
            <li class="mb-4">
                <a use:link href="/network/partners" class="hover:underline">
                    Our Partners
                </a>
            </li>
            <li class="mb-4">
                <a
                    use:link
                    href="/network/become-a-partner"
                    class="hover:underline"
                >
                    Become A Partner
                </a>
            </li>
        </ul>
    </div>
</div>
