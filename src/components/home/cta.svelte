<script>
    import { link } from 'svelte-routing'

    let imgSrc = '/img/bring_together.webp'
</script>

<section class="pt-12 pb-24">
    <div
        class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-2xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6"
    >
        <!-- LEFT IMAGE -->

        <img class="w-full rounded-lg shadow-md" src={imgSrc} alt="dashboard" />

        <!-- RIGHT SECTION -->

        <div class="mt-4 md:mt-0">
            <h2
                class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900"
            >
                A Trusted Network Creating Tools and Ideas for the Future
            </h2>
            <p class="mb-6 font-light text-gray-500 md:text-lg">
                Flowbite helps you connect with friends and communities of
                people who share your interests. Connecting with your friends
                and family as well as discovering new ones is easy with features
                like Groups.
            </p>

            <!-- CTA -->

            <a
                use:link
                href="/network"
                class="inline-flex items-center text-lg font-medium text-[#00adee] hover:underline"
            >
                Discover Our Network
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
</section>
