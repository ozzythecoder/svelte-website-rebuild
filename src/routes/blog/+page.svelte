<script>
  import formatDate from "$lib/helpers/formatDate.js";

  export let data;
  const { allPosts } = data;
</script>

<ul class="flex-cards">
  {#each allPosts as post}
    <a href={post.path}>
      <li>
        <h2>{post.meta.title}</h2>
        <p class="date-published">{formatDate(post.meta.date)}</p>
        <p>{post.meta.description}</p>
      </li>
    </a>
  {/each}
</ul>

<style lang="scss">
  @use './style.scss';

  .flex-cards {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;

    margin: 2rem 15%;
    padding: 0;

    @media screen and (max-width: 480px) {
      margin: 0;
      align-items: center;
    }

    a {
      border-left: 1px solid #ccc;
      background-color: white;
      transition: background-color 0.2s linear, border-color 0.2s linear;
      min-width: 300px;
      margin: 1rem;
      padding: 1rem;
      list-style: none;

      &:hover {
        background-color: hsl(0, 10%, 90%);
        border-color: black;
      }
    }
  }

  p {
    font-size: 18px;
    margin: 0.5rem 0;
  }

  h2 {
    font-family: Bitter, serif;
    font-weight: 600;
    font-size: 2.4rem;
  }
</style>
