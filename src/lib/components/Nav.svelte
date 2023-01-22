<!-- 
  NAV
 -->

<nav>
  <ul>
    <li>
      <a href="/blog"> BLOG </a>
    </li>
    <li>
      <a href="/gallery"> GALLERY </a>
    </li>
    <li>
      <a href="/contact"> CONTACT </a>
    </li>
    <li>
      <a href="/"> HOME </a>
    </li>
  </ul>
</nav>

<style>
  nav ul {
    display: flex;
    margin: 2rem auto;
    margin-bottom: 0;
    justify-content: space-between;
    width: 50%;
  }

  nav li {
    list-style: none;
    font-family: Overpass, system-ui, sans-serif;
    font-weight: 200;
    font-size: 2rem;
  }

  a {
    display: inline-block;
    position: relative;
    text-transform: uppercase;
    padding: 5px;
  }

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

  a:hover:after {
    width: 100%;
    left: 0;
  }
</style>
