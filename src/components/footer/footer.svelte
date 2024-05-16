<script>
    import { link } from 'svelte-routing'

    import LinkList from './link_list.svelte'
    import Contact from './contact.svelte'
    import Socials from './socials.svelte'

    let logoSrc = '/logo/aimrobotics/logo_full_white.webp'
</script>

<!-- FOOTER -->

<footer class="bg-[#222c56]">
    <div class="mx-auto w-full max-w-screen-2xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between pt-12">
            <div class="mb-6 md:mb-0">
                <a use:link href="/" class="flex flex-col items-start">
                    <img src={logoSrc} class="h-12 me-3" alt="FlowBite Logo" />
                    <p class=" text-white pt-5">
                        Automation Solutions for <br />
                        Collaborative Robot Applications
                    </p>
                </a>
            </div>

            <!-- NAVIGATION -->

            <LinkList />

            <!-- CONTACT INFORMATION -->

            <Contact />
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />

        <!-- SOCIALS-->

        <Socials />
    </div>
</footer>
