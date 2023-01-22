<!-- SCRIPTS/IMPORTS -->
<script>
  import { fade } from "svelte/transition";
  import { onMount } from "svelte";

  export const src = "./hero-img.jpg";
  $: title = "OZZY THE PAINTER";
  $: showTitle = false;

  onMount(() => {
    showTitle = true;
  });
</script>

<!-- MARKUP -->
<header>
  <div class="hero-img">
    <div class="title-div">
      {#if showTitle}
        <h1 in:fade={{ duration: 1700, delay: 200 }} class="page-title">
          {title}
        </h1>
      {/if}
    </div>
    {#if showTitle}
      <div
        in:fade={{ duration: 1000, delay: 1000 }}
        class="scroll-indicator material-symbols-outlined"
      >
        expand_more
      </div>
    {/if}
  </div>
</header>

<!-- STYLES -->
<style lang="scss">
  @use "../styles/font-imports";
  @use "../styles/fs-mixins";

  .page-title {
    @include fs-mixins.font-size(fs-mixins.$title-font-sizes);
    @media screen and (min-width: 850px) {
      white-space: nowrap;
      overflow-wrap: normal;
    }
    font-family: Bitter, serif;
    letter-spacing: 0.15em;
    color: white;
  }

  .scroll-indicator {
    position: absolute;
    cursor: default;
    text-align: center;
    color: font-imports.$primary;
    left: 50%;
    bottom: 5%;
  }

  .title-div {
    text-align: center;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }

  .hero-img {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url("/hero-img.jpg");
    height: 100vh;
    background-position: center;
    background-position-x: 0%;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
  }
</style>
