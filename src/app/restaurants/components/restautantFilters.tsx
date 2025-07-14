"use client";

import { BackButton } from "@/components/back-button";
import { ICity } from "@/interfaces/ICity";
import { IResponse } from "@/interfaces/IResponse";
import { IRestaurant } from "@/interfaces/IRestaurant";
import { getAllCities } from "@/services/cities";
import { getAllRestaurants } from "@/services/restaurants";
import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import Restaurant from "./restaurant";

interface RestaurantWithCityFilterProps {
  city?: ICity;
}

export default function RestaurantWithCityFilter({
  city: initialCity,
}: RestaurantWithCityFilterProps) {
  const [selectedCityId] = useState<string | undefined>(
    initialCity?.id.toString(),
  );
  const [selectedCityIdPending, setSelectedCityIdPending] = useState<
    string | undefined
  >(undefined);
  const [page, setPage] = useState(0);
  const size = 10;

  const { data: citiesData } = useQuery<IResponse<ICity[]>>({
    queryKey: ["cities"],
    queryFn: () => getAllCities(1000, 0),
    staleTime: 1000 * 60 * 5,
  });

  const selectedCity = useMemo(() => {
    const id = selectedCityIdPending ?? selectedCityId;
    return citiesData?.data.find((city) => city.id.toString() === id);
  }, [selectedCityId, selectedCityIdPending, citiesData]);

  const { data: RestaurantersData, isLoading } = useQuery<
    IResponse<IRestaurant[]>
  >({
    queryKey: ["Restaurantes", page, selectedCity?.nome],
    queryFn: () => getAllRestaurants(size, page, selectedCity?.nome),
    enabled: !!selectedCity,
    staleTime: 1000 * 60,
  });

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = citiesData?.data.find(
      (city) => city.nome === e.target.value,
    );
    if (!selected) return;

    if (
      selected.id.toString() === selectedCityId ||
      selected.id.toString() === selectedCityIdPending
    )
      return;

    setSelectedCityIdPending(selected.id.toString());
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
          <option value="">Selecione uma cidade</option>
          {citiesData?.data.map((city) => (
            <option key={city.id} value={city.nome}>
              {city.nome}
            </option>
          ))}
        </select>
      </div>

      {selectedCity && RestaurantersData && (
        <Restaurant initialData={RestaurantersData} city={selectedCity} />
      )}

      {selectedCity && isLoading && (
        <p className="text-center text-gray-600">Carregando Restaurantes...</p>
      )}
    </div>
  );
}
