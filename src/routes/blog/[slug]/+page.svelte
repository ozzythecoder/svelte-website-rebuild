<script>
  export let data;
  const { title, date, Content } = data;
</script>

<article>
  <h1>{title}</h1>
  <p>Published on: {date}</p>
  <Content />
</article>

<style lang="scss">
  
</style>