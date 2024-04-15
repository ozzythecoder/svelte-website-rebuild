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
  @use '../style.scss';

</style>
