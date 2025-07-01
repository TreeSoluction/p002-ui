"use client";

import { ICity } from "@/interfaces/ICity";
import { IResponse } from "@/interfaces/IResponse";
import { getCities } from "@/services/cities";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import CityCard from "./card";

interface CityProps {
  initialData: IResponse<ICity[]>;
}

export default function City({ initialData }: CityProps) {
  const [page, setPage] = useState(initialData.page ?? 0);
  const size = initialData.size ?? 10;

  const { data, isLoading } = useQuery<IResponse<ICity[]>>({
    queryKey: ["cities", page],
    queryFn: () => getCities(size, page),
    placeholderData: page === initialData.page ? initialData : undefined,
    staleTime: 1000 * 60,
  });

  const cityData = data ?? { data: [], totalPages: 0, page: 0, size };

  return (
    <div className="py-8 px-4">
      {isLoading ? (
        <p className="text-center text-gray-600">Carregando cidades...</p>
      ) : cityData.data.length > 0 ? (
        <>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {cityData.data.map((city, index) => (
              <CityCard city={city} key={index} />
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
                page + 1 >= (cityData.totalPages ?? 0) ||
                (cityData.totalPages ?? 0) === 0
              }
              className="px-4 py-2 bg-blue-800 text-white rounded disabled:opacity-50"
            >
              Próxima
            </button>
          </div>
        </>
      ) : (
        <div className="text-center text-gray-600 mt-8">
          <p className="text-lg">😕 Nenhuma cidade foi encontrada.</p>
          <p className="text-sm mt-1">Tente novamente mais tarde!</p>
        </div>
      )}
    </div>
  );
}
