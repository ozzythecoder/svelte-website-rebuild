<!-- 
GLOBAL LAYOUT
-->

<script>
  import "$lib/styles/style.scss";
  import { fade } from "svelte/transition";

  import TitleSplash from "../lib/components/TitleSplash.svelte";
  import Nav from "../lib/components/Nav.svelte";
  import Footer from "../lib/components/Footer.svelte";
  import Socials from "../lib/components/Socials.svelte";
    import Header from "../lib/components/Header.svelte";

  $: getTitleBar = () => {
    const title = data.currentRoute.slice(1,);
    return title.charAt(0).toUpperCase() + title.slice(1,) || "Ozzy the Painter"
  }

  export let data; // contains data from +layout.js
</script>

<svelte:head>
  <title>
    {getTitleBar()}
  </title>
</svelte:head>

{#key data.currentRoute}
<div in:fade={{ duration: 400 }}>
  {#if data.currentRoute === "/"}
    <header>
      <TitleSplash />
    </header>
  {:else}
    <Header />
  {/if}

  <main id="main">
    <Nav />
    <Socials />
    <slot />
  </main>

  <Footer />
</div>
{/key}
