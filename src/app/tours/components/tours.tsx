"use client";

import { fetchExcursionsByUF } from "@/services/tours";

import { IResponse } from "@/interfaces/IResponse";
import { ITour } from "@/interfaces/ITours";
import { useQuery } from "@tanstack/react-query";
import { Phone, Target } from "lucide-react";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { States } from "./states";

export default function Tours() {
  const [selectedUF, setSelectedUF] = useState<string | null>(null);
  const [page, setPage] = useState(0);
  const size = 10;

  const { data, isLoading } = useQuery<IResponse<ITour>>({
    queryKey: ["excursions", selectedUF, page],
    queryFn: () => fetchExcursionsByUF(selectedUF!, size, page),
    enabled: !!selectedUF,
  });

  function handleSelectUF(uf: string) {
    setSelectedUF(uf);
    setPage(0);
  }

  return (
    <div className="py-8 px-4">
      <States onSelect={handleSelectUF} />

      {selectedUF && (
        <>
          <h2 className="text-xl font-bold text-center mt-6 mb-4 text-blue-900">
            Excursões disponíveis para {selectedUF}
          </h2>

          {isLoading ? (
            <p className="text-center text-gray-600">Carregando excursões...</p>
          ) : data && data.data.length > 0 ? (
            <>
              <ul className="max-w-3xl mx-auto space-y-4">
                {data.data.map((item: ITour) => (
                  <li
                    key={item.id}
                    className="bg-white p-4 rounded-lg shadow flex flex-col gap-2 md:flex-row md:justify-between md:items-start"
                  >
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {item.nome}
                      </h3>

                      <p className="text-sm text-gray-700 mt-1">
                        <strong className="text-gray-800">Origem:</strong>{" "}
                        {item.origem}
                      </p>

                      <p className="flex items-center gap-1 text-sm text-red-600 mt-1">
                        <Target /> <strong>Destino:</strong> {item.estado}
                      </p>

                      <p className="text-sm text-gray-700 mt-2">
                        <strong className="text-gray-800">Rota:</strong>{" "}
                        <span className="text-gray-600">
                          {item.rota.join(" • ")}
                        </span>
                      </p>
                    </div>

                    <div className="flex gap-2 mt-2 md:mt-0 flex-wrap">
                      {item.phone_numbers.map((phone, i) => {
                        const cleaned = phone.replace(/\D/g, "");
                        const isMobile = /^(\d{2})9\d{8}$/.test(cleaned);

                        return isMobile ? (
                          <a
                            key={i}
                            href={`https://wa.me/55${cleaned}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-green-100 hover:bg-green-200 text-green-800 px-3 py-2 rounded text-sm"
                          >
                            <FaWhatsapp size={20} />
                            {phone}
                          </a>
                        ) : (
                          <div
                            key={i}
                            className="flex items-center gap-2 bg-gray-100 text-gray-800 px-3 py-2 rounded text-sm"
                          >
                            <Phone /> {phone}
                          </div>
                        );
                      })}
                    </div>
                  </li>
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
                  disabled={data && page + 1 >= (data.totalPages ?? 0)}
                  className="px-4 py-2 bg-blue-800 text-white rounded disabled:opacity-50"
                >
                  Próxima
                </button>
              </div>
            </>
          ) : (
            <div className="text-center text-gray-600 mt-8">
              <p className="text-lg">
                😕 Nenhuma excursão encontrada para {selectedUF}.
              </p>
              <p className="text-sm mt-1">
                Tente outro estado ou volte mais tarde!
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
}
