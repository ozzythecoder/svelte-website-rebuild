<script>
  import "$lib/styles/style.scss";
  import TitleSplash from "../lib/components/TitleSplash.svelte";
  import { fade } from "svelte/transition";
  import Nav from "../lib/components/Nav.svelte";

  export let data;
</script>

{#key data.currentRoute}
  <div in:fade={{ duration: 400 }}>
    {#if data.currentRoute == "/"}
      <header>
        <TitleSplash />
      </header>
    {/if}

    <Nav />

    <main>
      <slot />
    </main>
  </div>
{/key}
