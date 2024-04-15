<header>
  <div class="page-title">
    <h1>
      <a href="/">
        Ozzy The Painter
      </a>
    </h1>
  </div>
</header>

<style lang="scss">

  @use '../styles/fs-mixins';

  a {
    font-family: Bitter, sans-serif;
    text-transform: uppercase;
    font-weight: 800;
    @include fs-mixins.font-size(fs-mixins.$h2-font-sizes);
    letter-spacing: 0.05rem;
  }

  .page-title {
    text-align: center;
    margin-top: 1.4rem;
  }
</style>
