import { DateTime } from "luxon";

export async function load({ params }) {
  const post = await import(`../posts/${params.slug}.md`)

  const Content = post.default
  const { title } = post.metadata
  // format date to "Sat, Jan 21, 2023"
  const date = DateTime.fromISO(post.metadata.date).toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)

  return {
    Content, title, date
  }
}