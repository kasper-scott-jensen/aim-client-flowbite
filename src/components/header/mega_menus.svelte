<script>
    import { megaMenuStates } from '../../stores/navigation'

    import MegaMenuProducts from './mega_menu_products.svelte'
    import MegaMenuApplications from './mega_menu_applications.svelte'
    import MegaMenuKnowledgeCenter from './mega_menu_knowledge_center.svelte'
</script>

<!-- MEGA MENU SWITCHER -->

{#if $megaMenuStates[0]}
    <MegaMenuProducts />
{:else if $megaMenuStates[1]}
    <MegaMenuApplications />
{:else if $megaMenuStates[2]}
    <MegaMenuKnowledgeCenter />
{/if}
