"use client";

import { ICity } from "@/interfaces/ICity";
import { IResponse } from "@/interfaces/IResponse";
import { ITransport } from "@/interfaces/ITransport";
import { getAllCities } from "@/services/cities";
import { getAllTransporters } from "@/services/transporters";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Transport from "./transport";

interface TransportWithCityFilterProps {
  city?: ICity;
}

export default function TransportWithCityFilter({
  city: initialCity,
}: TransportWithCityFilterProps) {
  const [selectedCity, setSelectedCity] = useState<ICity | undefined>(
    initialCity,
  );
  const [page, setPage] = useState(0);
  const size = 10;

  // Buscar todas as cidades para o filtro
  const { data: citiesData } = useQuery<IResponse<ICity[]>>({
    queryKey: ["cities"],
    queryFn: () => getAllCities(1000, 0),
    staleTime: 1000 * 60 * 5,
  });

  // Buscar transportadoras com base na cidade selecionada
  const { data: transportersData, isLoading } = useQuery<
    IResponse<ITransport[]>
  >({
    queryKey: ["transportes", page, selectedCity?.nome],
    queryFn: () => getAllTransporters(size, page, selectedCity?.nome),
    enabled: !!selectedCity,
    staleTime: 1000 * 60,
  });

  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = citiesData?.data.find(
      (city) => city.nome === e.target.value,
    );

    if (!selected) return;

    setSelectedCity(selected);
    setPage(0);
  };

  return (
    <div className="p-4 max-w-3xl mx-auto space-y-4">
      <label className="block text-sm font-medium text-gray-700">
        Filtrar por cidade:
      </label>
      <select
        onChange={handleCityChange}
        value={selectedCity?.nome ?? ""}
        className="w-full border border-gray-300 rounded px-3 py-2"
      >
        <option value="">Selecione uma cidade</option>
        {citiesData?.data.map((city) => (
          <option key={city.id} value={city.nome}>
            {city.nome}
          </option>
        ))}
      </select>

      {selectedCity && transportersData && (
        <Transport
          initialData={transportersData}
          city={selectedCity}
          // page e setPage podem ser passados aqui também, se quiser controle externo
        />
      )}

      {selectedCity && isLoading && (
        <p className="text-center text-gray-600">
          Carregando transportadoras...
        </p>
      )}
    </div>
  );
}
