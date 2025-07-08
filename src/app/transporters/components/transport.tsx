"use client";

import { Card } from "@/components/card";
import { ICity } from "@/interfaces/ICity";
import { IResponse } from "@/interfaces/IResponse";
import { ITransport } from "@/interfaces/ITransport";
import { getAllTransporters } from "@/services/transporters";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

interface TransportProps {
  initialData: IResponse<ITransport[]>;
  city?: ICity;
}

export default function Transport({ initialData, city }: TransportProps) {
  const [page, setPage] = useState(initialData.page ?? 0);
  const size = initialData.size ?? 10;

  const { data, isLoading } = useQuery<IResponse<ITransport[]>>({
    queryKey: ["transportes", page, city],
    queryFn: () => getAllTransporters(size, page, city?.nome),
    placeholderData: page === initialData.page ? initialData : undefined,
    staleTime: 1000 * 60,
  });

  const transportData = data ?? { data: [], totalPages: 0, page: 0, size };

  return (
    <div className="py-8 px-4">
      {isLoading ? (
        <p className="text-center text-gray-600">
          Carregando transportadoras...
        </p>
      ) : transportData.data.length > 0 ? (
        <>
          <ul className="max-w-3xl mx-auto space-y-4">
            {transportData.data.map((item) => (
              <Card key={item.id} data={item} />
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
                page + 1 >= (transportData.totalPages ?? 0) ||
                (transportData.totalPages ?? 0) === 0
              }
              className="px-4 py-2 bg-blue-800 text-white rounded disabled:opacity-50"
            >
              Próxima
            </button>
          </div>
        </>
      ) : (
        <div className="text-center text-gray-600 mt-8">
          <p className="text-lg">😕 Nenhum transporte encontrado.</p>
          <p className="text-sm mt-1">Tente novamente mais tarde!</p>
        </div>
      )}
    </div>
  );
}
