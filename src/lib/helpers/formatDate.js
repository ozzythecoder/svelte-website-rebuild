import { DateTime } from "luxon";

export default function formatDate(dateIn) {
  return DateTime
    .fromISO(dateIn)
    .toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)
}