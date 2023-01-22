import { DateTime } from "luxon";

export async function load({ params }) {
  const post = await import(`../posts/${params.slug}.md`)

  console.log(post);


  const Content = post.default
  const { title } = post.metadata
  const date = DateTime.fromISO(post.metadata.date).toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)

  return {
    Content, title, date
  }
}