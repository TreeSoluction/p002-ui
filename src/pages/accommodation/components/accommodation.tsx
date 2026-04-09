import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import { getAllAccommodations } from "../../../services/accommodation";
import AccommodationCard from "./card";

import type { IAccommodation } from "../../../interfaces/IAccommodation";
import type { ICity } from "../../../interfaces/ICity";
import type { IResponse } from "../../../interfaces/IResponse";

interface AccommodationProps {
  initialData?: IResponse<IAccommodation[]>;
  city?: ICity;
}

export default function Accommodation({
  initialData,
  city,
}: AccommodationProps) {
  const [page, setPage] = useState(initialData?.page ?? 0);
  const size = initialData?.size ?? 10;

  const { data, isLoading } = useQuery<IResponse<IAccommodation[]>>({
    queryKey: ["accommodation", page, city?.nome],
    queryFn: () => getAllAccommodations(size, page, city?.nome),
    initialData,
    staleTime: 1000 * 60,
  });

  const accommodationData = data ?? { data: [], totalPages: 0, page: 0, size };

  if (isLoading) {
    return (
      <div className="py-8 px-4">
        <p className="text-center text-gray-600">Carregando hospedagens...</p>
      </div>
    );
  }

  if (!accommodationData.data.length) {
    return (
      <div className="py-8 px-4 text-center text-gray-600">
        <p className="text-lg">😕 Nenhuma hospedagem encontrada.</p>
        <p className="text-sm mt-1">Tente novamente mais tarde!</p>
      </div>
    );
  }

  return (
    <div className="py-8 px-4">
      <ul className="max-w-3xl mx-auto space-y-4">
        {accommodationData.data.map((item) => (
          <AccommodationCard key={item.id} accommodation={item} />
        ))}
      </ul>

      <div className="flex justify-center items-center gap-4 mt-6">
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 0))}
          disabled={page === 0}
          className="px-4 py-2 bg-blue-800 text-white rounded disabled:opacity-50"
        >
          Anterior
        </button>

        <span className="text-sm text-gray-600">Página {page + 1}</span>

        <button
          onClick={() => setPage((p) => p + 1)}
          disabled={
            page + 1 >= (accommodationData.totalPages ?? 0) ||
            (accommodationData.totalPages ?? 0) === 0
          }
          className="px-4 py-2 bg-blue-800 text-white rounded disabled:opacity-50"
        >
          Próxima
        </button>
      </div>
    </div>
  );
}
