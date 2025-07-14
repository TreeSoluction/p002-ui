"use client";

import { ICity } from "@/interfaces/ICity";
import { IResponse } from "@/interfaces/IResponse";
import { ISegment } from "@/interfaces/ISegment";
import { IStore } from "@/interfaces/IStore";
import { getAllStores } from "@/services/store";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import StoreCard from "./card";

interface StoreProps {
  initialData: IResponse<IStore[]>;
  segment: ISegment;
  cityId?: string;
  cities: ICity[];
}

export default function Store({
  initialData,
  segment,
  cityId,
  cities,
}: StoreProps) {
  const [page, setPage] = useState(initialData.page ?? 0);
  const size = initialData.size ?? 10;

  const city = cities.find((city) => city.id.toString() === cityId);

  const { data, isLoading } = useQuery<IResponse<IStore[]>>({
    queryKey: [`store${segment.name}-${cityId}`, page],
    queryFn: () =>
      getAllStores({
        size,
        page,
        categoria: segment.name,
        cidade: city?.nome,
      }),
    placeholderData: page === initialData.page ? initialData : undefined,
    staleTime: 1000 * 60,
  });

  const storeData = data ?? { data: [], totalPages: 0, page: 0, size };

  return (
    <div className="py-8 px-4">
      {isLoading ? (
        <p className="text-center text-gray-600">Carregando lojas...</p>
      ) : storeData.data.length > 0 ? (
        <>
          <ul className="flex flex-col gap-6 max-w-4xl mx-auto">
            {storeData.data.map((store, index) => (
              <StoreCard store={store} key={index} />
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
                page + 1 >= (storeData.totalPages ?? 0) ||
                (storeData.totalPages ?? 0) === 0
              }
              className="px-4 py-2 bg-blue-800 text-white rounded disabled:opacity-50"
            >
              Próxima
            </button>
          </div>
        </>
      ) : (
        <div className="text-center text-gray-600 mt-8">
          <p className="text-lg">
            😕 Nenhuma loja foi encontrada para esse segmento.
          </p>
          <p className="text-sm mt-1">Tente novamente mais tarde!</p>
        </div>
      )}
    </div>
  );
}
