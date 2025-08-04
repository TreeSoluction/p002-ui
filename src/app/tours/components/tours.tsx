"use client";

import { BackButton } from "@/components/back-button";
import Link from "@/components/link";
import { ICity } from "@/interfaces/ICity";
import { IResponse } from "@/interfaces/IResponse";
import { ITour } from "@/interfaces/ITours";
import { getAllCities } from "@/services/cities";
import { fetchExcursionsByUF } from "@/services/tours";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeft, Phone, Target } from "lucide-react";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { States } from "./states";

interface ToursProps {
  city?: ICity;
}

export default function Tours({ city: initialCity }: ToursProps) {
  const [selectedUF, setSelectedUF] = useState<string | null>(null);
  const [selectedCity, setSelectedCity] = useState<ICity | undefined>(
    initialCity,
  );
  const [page, setPage] = useState(0);
  const [showStates, setShowStates] = useState(true);
  const size = 10;

  const { data: citiesData } = useQuery<IResponse<ICity[]>>({
    queryKey: ["cities"],
    queryFn: () => getAllCities(1000, 0),
    staleTime: 1000 * 60 * 5,
  });

  const { data, isLoading } = useQuery<IResponse<ITour[]>>({
    queryKey: ["excursions", selectedUF, page, selectedCity?.nome],
    queryFn: async () => {
      const response = await fetchExcursionsByUF(selectedUF!, size, page);

      if (selectedCity) {
        return {
          ...response,
          data: response.data.filter(
            (tour) => tour.origem === selectedCity.nome,
          ),
          totalPages: response.totalPages,
        };
      }

      return response;
    },
    enabled: !!selectedUF,
  });

  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;

    if (value === "") {
      setSelectedCity(undefined);
      setPage(0);
      return;
    }

    const selected = citiesData?.data.find((c) => c.nome === value);
    if (selected) {
      setSelectedCity(selected);
      setPage(0);
    }
  };

  const handleSelectUF = (uf: string) => {
    setSelectedUF(uf);
    setSelectedCity(undefined);
    setPage(0);
    setShowStates(false);
  };

  return (
    <div className="py-8 px-4 max-w-4xl mx-auto space-y-6">
      {showStates ? (
        <div className="mb-2">
          <BackButton />
        </div>
      ) : (
        <button
          onClick={() => {
            setShowStates(true);
            setSelectedUF(null);
            setSelectedCity(undefined);
            setPage(0);
          }}
          className="inline-flex cursor-pointer items-center gap-1 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700 transition"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          <span>Voltar</span>
        </button>
      )}

      {showStates && <States onSelect={handleSelectUF} />}

      {!showStates && selectedUF && (
        <div className="flex justify-between items-center mt-4">
          <p className="text-sm text-gray-600">
            Estado selecionado: <strong>{selectedUF}</strong>
          </p>
          <button
            onClick={() => {
              setShowStates(true);
              setSelectedUF(null);
              setSelectedCity(undefined);
              setPage(0);
            }}
            className="text-sm text-blue-700 hover:underline"
          >
            Trocar estado
          </button>
        </div>
      )}

      {selectedUF && !showStates && (
        <>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Filtrar por cidade de origem:
            </label>
            <select
              onChange={handleCityChange}
              value={selectedCity?.nome ?? ""}
              className="w-full border border-gray-300 rounded px-3 py-2"
            >
              <option value="">Todas as cidades</option>
              {citiesData?.data.map((city) => (
                <option key={city.id} value={city.nome}>
                  {city.nome}
                </option>
              ))}
            </select>
          </div>

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
                          <Link
                            key={i}
                            href={`https://wa.me/55${cleaned}?text=Olá%2C%20vim%20do%20Feiras%20de%20Pernambuco%2C%20gostaria%20de%20mais%20informações.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-green-100 hover:bg-green-200 text-green-800 px-3 py-2 rounded text-sm"
                          >
                            <FaWhatsapp size={20} />
                            {phone}
                          </Link>
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
                😕 Nenhuma excursão encontrada para{" "}
                <strong>{selectedUF}</strong>
                {selectedCity ? ` com origem em ${selectedCity.nome}` : ""}.
              </p>
              <p className="text-sm mt-1">
                Tente outro estado ou cidade, ou volte mais tarde!
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
}
