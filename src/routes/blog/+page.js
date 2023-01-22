export const load = async () => {
  const allPostFiles = Object.entries( import.meta.glob('./posts/*.md') )
  console.log(allPostFiles)

  const allPosts = await Promise.all(
    allPostFiles.map(async ([filePath, getData]) => {
      const { metadata } = getData();
      const path = filePath.replace("/posts", "")

      return { path, meta: metadata }
    })
  )

  return allPosts
}