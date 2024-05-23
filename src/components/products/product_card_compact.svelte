<script>
    import { link } from 'svelte-routing'
    import { categoryMenu } from '../../stores/product_catalogue'

    export let img
    export let id
    export let categoryId
    export let category
    export let name
    export let url
    export let imgClass = ''
</script>

<a use:link href={url} class="block group">
    <article
        class="rounded-md p-6 shadow-md bg-white hover:cursor-pointer h-full flex flex-col border"
    >
        <!-- IMAGE -->
        <div
            class="relative flex items-center justify-center overflow-hidden bg-white h-64"
        >
            <img
                src={img}
                alt="article"
                class={`max-h-full w-full object-contain ${imgClass}`}
            />
            <div
                class="absolute bottom-0 left-0 bg-gray-900 text-white text-sm font-semibold px-2 py-1 rounded"
            >
                # {id}
            </div>
        </div>

        <!-- TITLE -->
        <div class="mt-4 flex-grow">
            <h2 class="text-primary-700 font-bold text-lg">{name}</h2>
            <p class="text-gray-500 mt-1 text-sm capitalize">
                <span
                    class={`bg-${$categoryMenu[categoryId - 1].color} inline-block w-2.5 h-2.5 mr-1 rounded-full`}
                ></span>
                {category}
            </p>
        </div>

        <!-- CTA -->
        <div class="mt-4 flex items-center group-hover:underline">
            <button type="button" class="text-gray-700 text-sm font-medium">
                Read More
                <svg
                    class="w-4 h-4 ml-1 rtl:rotate-180 inline"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                >
                    <path
                        stroke="#222c56"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                </svg>
            </button>
        </div>
    </article>
</a>
