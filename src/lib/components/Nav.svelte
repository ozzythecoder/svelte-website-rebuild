<!-- 
  NAV
 -->

<script>
  const navRoutes = [
    { name: "blog", url: "/blog" },
    { name: "music", url: "https://solo.to/ozzythepainter"},
    { name: "contact", url: "/contact" },
    { name: 'gallery', url: '/gallery' },
    { name: "home", url: "/" },
  ]

  const toggleMenu = () => {
    const menu = document.getElementById('nav-menu')
    menu.classList.toggle('visible')
  }

</script>

<nav>
  <button id="menu-toggle" on:click={toggleMenu}>
    <span class="material-symbols-outlined">menu</span>
  </button>
  <ul id="nav-menu" class="visible">
    {#each navRoutes as route}
      <li>
        <a href={route.url}>
          {route.name}
        </a>
      </li>
    {/each}
  </ul>
</nav>

<style lang="scss">
  @use '../styles/font-imports';
  @use '../styles/fs-mixins';

  #menu-toggle {
    border: none;
    background: none;
    max-width: fit-content;
    margin: 0 auto;
    aspect-ratio: 1 / 1;
    font: inherit;

    display: none;
  }

  nav {
    display: flex;
    margin: 0 auto 0;
    max-width: 1000px;
    flex-direction: column;
      @media screen and (max-width: 480px) {
        margin-top: 1rem;
        #menu-toggle {
          display: block;
        }
      }
  }

  @media screen and (max-width: 480px) {
    ul:not(.visible) {
      height: 0px;
    }
  }

  nav ul { 
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    padding: 0;
    overflow: hidden;
    transition: height 0.5s ease;

    @media screen and (max-width: 480px) {
      flex-direction: column;
    };
  }

  nav li {
    padding: 0;
    list-style: none;
    text-transform: uppercase;
    font-family: Overpass, system-ui, sans-serif;
    font-weight: 200;
    font-size: 2rem;
    @include fs-mixins.font-size(fs-mixins.$h2-font-sizes);
  }

  a {
    display: inline-block;
    position: relative;
    text-transform: uppercase;
    padding: 5px;
  }

  // underline animation setup
  a:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: #000;
    transition: width 0.5s ease 0s,
      left 0.5s ease 0s;
    width: 0;
  }

  // underline animation trigger
  a:hover:after {
    width: 100%;
    left: 0;
  }
</style>
