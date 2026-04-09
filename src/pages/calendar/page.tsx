import { BackButton } from "../../components/back-button";
import type { ICalendar } from "../../interfaces/ICalendar";
import { getCalendarById } from "../../services/calendar";

import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function Page() {
  const [searchParams] = useSearchParams();
  const [calendar, setCalendar] = useState<ICalendar | null>(null);

  const calendarId = searchParams.get("id");

  useEffect(() => {
    async function loadCalendar() {
      if (!calendarId) return;

      const response = await getCalendarById(calendarId);
      setCalendar(response.data);
    }

    loadCalendar();
  }, [calendarId]);

  if (!calendar) return null;

  return (
    <>
      <div className="px-2 m-2">
        <BackButton />
      </div>

      <main className="flex flex-col items-center min-h-screen px-4 py-8 bg-gray-100">
        <h1 className="text-2xl sm:text-3xl font-semibold text-center mb-6 text-gray-800">
          {calendar.titulo}
        </h1>

        {calendar.imagem ? (
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
