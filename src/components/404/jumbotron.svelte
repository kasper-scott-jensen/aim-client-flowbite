<script>
    import { link } from 'svelte-routing'
</script>

<!-- 404 JUMBROTRON -->

<section class="flex flex-col min-h-screen justify-center -mt-48">
    <div class="px-4 mx-auto max-w-screen-2xl lg:px-6">
        <div class="mx-auto text-center">
            <h1
                class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-700"
            >
                404
            </h1>
            <p
                class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl"
            >
                Something's missing.
            </p>
            <p class="mb-4 text-lg font-light text-gray-500">
                Sorry, we can't find that page.
            </p>
            <a
                use:link
                href="/"
                class="inline-flex text-white bg-primary-700 hover:bg-primary-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4"
            >
                Back to Homepage
            </a>
        </div>
    </div>
</section>
