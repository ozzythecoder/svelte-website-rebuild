<!-- 
  NAV
 -->

<script>
  const navRoutes = [
    { name: "blog", url: "/blog" },
    { name: "gallery", url: "/gallery" },
    { name: "contact", url: "/contact" },
    { name: "home", url: "/" },
  ]

</script>

<nav>
  <ul>

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
  nav ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    
    margin: 2rem auto 0;
    padding: 0;
    max-width: 1000px;

    @media screen and (max-width: 480px) {
      flex-direction: column;
      align-items: center;
      padding: 0;
    };
  }

  nav li {
    list-style: none;
    text-transform: uppercase;
    font-family: Overpass, system-ui, sans-serif;
    font-weight: 200;
    font-size: 2rem;
  }

  @media screen and (min-width: 480px) {
    nav li:not(:first-of-type) {
      padding-left: 1rem;
    }
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
