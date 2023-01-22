<script>
  import formatDate from '$lib/helpers/formatDate.js'

  export let data;
  const { allPosts } = data;
</script>

{#each allPosts as post}
<a href={post.path}>
  <h3>{post.meta.title}</h3>
  <p>{formatDate(post.meta.date)}</p>
  <p>{post.meta.description}</p>
</a>
{/each}

<style>

</style>