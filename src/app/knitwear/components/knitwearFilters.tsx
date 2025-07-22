"use client";

import { BackButton } from "@/components/back-button";
import { ICity } from "@/interfaces/ICity";
import { IKnitwear } from "@/interfaces/IKnitwear";
import { IResponse } from "@/interfaces/IResponse";
import { getAllCities } from "@/services/cities";
import { getAllKnitwears } from "@/services/knitwear";
import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import Knitwear from "./knitwear";

interface KnitwearWithCityFilterProps {
  city?: ICity;
}

export default function KnitwearWithCityFilter({
  city: initialCity,
}: KnitwearWithCityFilterProps) {
  const [selectedCityId, setSelectedCityId] = useState<string | undefined>(
    initialCity?.id?.toString(),
  );
  const [page, setPage] = useState(0);
  const size = 10;

  const { data: citiesData } = useQuery<IResponse<ICity[]>>({
    queryKey: ["cities"],
    queryFn: () => getAllCities(1000, 0),
    staleTime: 1000 * 60 * 5,
  });

  const selectedCity = useMemo(() => {
    if (!selectedCityId) return undefined;
    return citiesData?.data.find(
      (city) => city.id.toString() === selectedCityId,
    );
  }, [selectedCityId, citiesData]);

  const { data: knitwearersData, isLoading } = useQuery<IResponse<IKnitwear[]>>(
    {
      queryKey: ["knitwears", page, selectedCity?.nome ?? "all"],
      queryFn: () => getAllKnitwears(size, page, selectedCity?.nome),
      staleTime: 1000 * 60,
    },
  );

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value === "") {
      setSelectedCityId(undefined);
    } else {
      const selected = citiesData?.data.find((city) => city.nome === value);
      if (selected && selected.id.toString() !== selectedCityId) {
        setSelectedCityId(selected.id.toString());
      }
    }
    setPage(0);
  };

  return (
    <div className="p-4 max-w-3xl mx-auto space-y-6">
      <div className="px-4 mb-2">
        <BackButton />
      </div>

      <div className="w-full px-4 md:px-0 md:max-w-md mx-auto">
        <label
          htmlFor="city-select"
          className="block text-sm font-medium mb-1 text-gray-700"
        >
          Filtrar por cidade:
        </label>
        <select
          id="city-select"
          onChange={handleSelectChange}
          value={selectedCity?.nome ?? ""}
          className="w-full border border-gray-300 rounded px-3 py-2 shadow-sm text-sm"
        >
          <option value="">Todas as cidades</option>
          {citiesData?.data.map((city) => (
            <option key={city.id} value={city.nome}>
              {city.nome}
            </option>
          ))}
        </select>
      </div>

      {knitwearersData && (
        <Knitwear initialData={knitwearersData} city={selectedCity} />
      )}

      {isLoading && (
        <p className="text-center text-gray-600">Carregando Malharias...</p>
      )}
    </div>
  );
}
