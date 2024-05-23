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

<div class="flex gap-x-4 items-center justify-center">
    {#if displayIcons[0]}
        <img src={icons[0]} alt="icon" class="w-4 h-4" />
    {/if}
    {#if displayIcons[1]}
        <img src={icons[1]} alt="icon" class="w-12 h-auto" />
    {/if}
    {#if displayIcons[2]}
        <img src={icons[2]} alt="icon" class="w-12 h-auto" />
    {/if}
    {#if displayIcons[3]}
        <img src={icons[3]} alt="icon" class="w-12 h-auto" />
    {/if}
    {#if displayIcons[4]}
        <img src={icons[4]} alt="icon" class="w-12 h-auto" />
    {/if}
    {#if displayIcons[5]}
        <img src={icons[5]} alt="icon" class="w-7 h-2.5" />
    {/if}
</div>
