<script>


  export let data;
  const { title, date, Content } = data;
</script>

<article class="card-with-gutters">
  <h2 class="blog-title">{title}</h2>
  <p class="date-published">Posted {date}</p>
  <Content />
</article>

<style lang="scss">

  .date-published {
    font-size: 0.8rem;
    text-transform: uppercase;
    color: #888;
  }
</style>