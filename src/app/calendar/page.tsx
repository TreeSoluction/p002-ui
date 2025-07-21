import { BackButton } from "@/components/back-button";
import { getCalendarById } from "@/services/calendar";

type Params = Promise<{ store: string }>;
type SearchParams = Promise<{ id: string }>;

export default async function Page(props: {
  params: Params;
  searchParams: SearchParams;
}) {
  const calendarId = (await props.searchParams).id;
  const getCalendar = await getCalendarById(calendarId);

  const calendar = getCalendar.data;

  return (
    <>
      <div className="px-2 m-2">
        <BackButton />
      </div>

      <main className="flex flex-col items-center  min-h-screen px-4 py-8 bg-gray-100">
        <h1 className="text-2xl sm:text-3xl font-semibold text-center mb-6 text-gray-800">
          {calendar.titulo}
        </h1>

        {calendar.imagem || "/logo.png" ? (
          <img
            src={calendar.imagem || "/logo.png"}
            alt={calendar.titulo}
            className="max-w-full h-auto rounded-lg shadow-md"
          />
        ) : (
          <p className="text-gray-500 text-center">Imagem não disponível</p>
        )}
      </main>
    </>
  );
}
