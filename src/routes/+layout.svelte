<!-- 
  GLOBAL LAYOUT
 -->
<script>
  import "$lib/styles/style.scss";
  import { fade } from "svelte/transition";

  import TitleSplash from "../lib/components/TitleSplash.svelte";
  import Nav from "../lib/components/Nav.svelte";
  import Footer from "../lib/components/Footer.svelte";

  export let data; // contains data from +layout.js
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

    <Footer />
  </div>
{/key}