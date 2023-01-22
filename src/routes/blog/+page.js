export const load = async () => {
  const allPostFiles = Object.entries( import.meta.glob('./posts/*.md') )

  const allPosts = await Promise.all(
    allPostFiles.map(async ([filePath, getData]) => {
      const { metadata } = await getData();
      const path = filePath.slice(1, -3).replace("/posts", "/blog")

      return { path, meta: metadata }
    })
  )

  return { allPosts }
}