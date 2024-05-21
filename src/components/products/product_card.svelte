<script>
    import { link } from 'svelte-routing'

    export let img
    export let id
    export let badges
    export let nameSub
    export let name
    export let url
    export let imgClass = ''
</script>

<a use:link href={url} class="group border-2 border-gray-900 rounded-md">
    <div
        class="relative flex flex-col w-full bg-gray-100 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 justify-center items-center h-full"
    >
        <img class="{imgClass} rounded-t-lg max-h-64" src={img} alt="product" />
        <div class="px-8 py-8 bg-gray-200 w-full h-full">
            <div class="flex items-center mb-3">
                <p
                    class="bg-gray-900 text-white text-md font-semibold inline-flex items-center p-1.5 px-2.5 rounded dark:bg-blue-200 dark:text-blue-800"
                >
                    # {id}
                </p>
            </div>
            <div class="flex items-center mt-2.5 mb-2.5">
                <div class="flex items-center">
                    {#each badges.filter((badge) => badge !== null && badge !== undefined) as badge}
                        <span
                            class="bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300"
                        >
                            {badge}
                        </span>
                    {/each}
                </div>
            </div>
            <h5
                class="text-lg font-normal tracking-tight text-gray-900 dark:text-white pt-2"
            >
                {nameSub}
            </h5>
            <div class="flex items-end justify-between">
                <span
                    class="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-primary-700 group-hover:underline"
                >
                    {name}
                </span>
            </div>
        </div>
    </div>
</a>
