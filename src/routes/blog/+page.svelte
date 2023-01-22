<script>
  import formatDate from "$lib/helpers/formatDate.js";

  export let data;
  const { allPosts } = data;
</script>

<ul class="flex-cards">
  {#each allPosts as post}
    <li>
      <a href={post.path}>
        <h3>{post.meta.title}</h3>
        <p class="date-published">{formatDate(post.meta.date)}</p>
        <p>{post.meta.description}</p>
      </a>
    </li>
  {/each}
</ul>

<style lang="scss">
  @use './styles.scss';

  .flex-cards {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    min-width: 300px;
    padding: 0;
    
    li {
      
      border: 1px solid #ccc;
      border-radius: 6px;

      padding: 1rem;
      list-style: none;
    }
  }

  p {
    font-size: 18px;
    margin: 0.5rem 0;
  }

  h3 {
    font-family: Bitter, serif;
    font-weight: 600;
    font-size: 24px;
  }
</style>
