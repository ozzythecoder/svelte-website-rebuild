<script>
  import '$lib/styles/style.scss';
  import TitleSplash from '../lib/components/TitleSplash.svelte';

  export let data;
</script>

{#if data.currentRoute == "/"}
  <TitleSplash />
{/if}

<main>
  <slot />
</main>