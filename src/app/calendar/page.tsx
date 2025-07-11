import { getCalendarById } from "@/services/calendar";

type Params = Promise<{ store: string }>;
type SearchParams = Promise<{ id: string }>;

export default async function Page(props: {
  params: Params;
  searchParams: SearchParams;
}) {
  const calendarId = (await props.searchParams).id;

  const getCalendar = await getCalendarById(calendarId);

  console.log(getCalendar);

  return <></>;
}
