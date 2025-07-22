"use client";

import { BackButton } from "@/components/back-button";
import { ICity } from "@/interfaces/ICity";
import { IParking } from "@/interfaces/IParking";
import { IResponse } from "@/interfaces/IResponse";
import { getAllCities } from "@/services/cities";
import { getAllParkings } from "@/services/parkings";
import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import Parking from "./parkings";

interface ParkingWithCityFilterProps {
  city?: ICity;
}

export default function ParkingWithCityFilter({
  city,
}: ParkingWithCityFilterProps) {
  const [selectedCityId, setSelectedCityId] = useState<string | undefined>(
    city?.id?.toString() ?? undefined,
  );
  const [page, setPage] = useState(0);
  const size = 10;

  const { data: citiesData } = useQuery<IResponse<ICity[]>>({
    queryKey: ["cities"],
    queryFn: () => getAllCities(1000, 0),
    staleTime: 1000 * 60 * 5,
  });

  const selectedCity = useMemo(() => {
    return citiesData?.data.find((c) => c.id.toString() === selectedCityId);
  }, [selectedCityId, citiesData]);

  const { data: parkingsData, isLoading } = useQuery<IResponse<IParking[]>>({
    queryKey: ["parkings", page, selectedCityId ?? "all"],
    queryFn: () => getAllParkings(size, page, selectedCity?.nome ?? undefined),
    staleTime: 1000 * 60,
  });

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newId = e.target.value === "" ? undefined : e.target.value;
    setSelectedCityId(newId);
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
          value={selectedCityId ?? ""}
          className="w-full border border-gray-300 rounded px-3 py-2 shadow-sm text-sm"
        >
          <option value="">Todas as cidades</option>
          {citiesData?.data.map((city) => (
            <option key={city.id} value={city.id.toString()}>
              {city.nome}
            </option>
          ))}
        </select>
      </div>

      {parkingsData && (
        <Parking initialData={parkingsData} city={selectedCity} />
      )}

      {isLoading && (
        <p className="text-center text-gray-600">
          Carregando Estacionamentos...
        </p>
      )}
    </div>
  );
}
