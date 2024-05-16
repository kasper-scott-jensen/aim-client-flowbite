<script>
    let icons = [
        '/logo/cobots/logo_universal.webp',
        '/logo/cobots/logo_kassow.webp',
        '/logo/cobots/logo_omron.webp',
        '/logo/cobots/logo_fanuc.webp',
        '/logo/cobots/logo_kuka.webp',
        '/logo/cobots/logo_abb.webp',
    ]
    export let displayIcons = []
</script>

<div
    class="absolute top-0 right-0 flex flex-col gap-4 pt-2 pe-2 items-center bg-gray-900 px-4 py-4 rounded-b-lg bg-opacity-70"
>
    {#if displayIcons[0]}
        <img src={icons[0]} alt="icon" class="w-16 h-5" />
    {/if}
    {#if displayIcons[1]}
        <img src={icons[1]} alt="icon" class="w-16 h-auto" />
    {/if}
    {#if displayIcons[2]}
        <img src={icons[2]} alt="icon" class="w-16 h-auto" />
    {/if}
    {#if displayIcons[3]}
        <img src={icons[3]} alt="icon" class="w-16 h-auto" />
    {/if}
    {#if displayIcons[4]}
        <img src={icons[4]} alt="icon" class="w-16 h-auto" />
    {/if}
    {#if displayIcons[5]}
        <img src={icons[5]} alt="icon" class="w-14 h-4" />
    {/if}
</div>
