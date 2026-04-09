import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { BackButton } from "../../../components/back-button";
import type { ICity } from "../../../interfaces/ICity";
import type { IFreetter } from "../../../interfaces/IFreetter";
import type { IResponse } from "../../../interfaces/IResponse";
import { getAllCities } from "../../../services/cities";
import { getAllFreetters } from "../../../services/freetter";
import Freetter from "./freetter";

interface FreetterWithCityFilterProps {
  city?: ICity;
}

export default function FreetterWithCityFilter({
  city: initialCity,
}: FreetterWithCityFilterProps) {
  const [selectedCityId, setSelectedCityId] = useState<string | undefined>(
    initialCity?.id?.toString(),
  );

  const size = 10;
  const page = 0;

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

  const { data: freetterersData, isLoading } = useQuery<IResponse<IFreetter[]>>(
    {
      queryKey: ["freetters", page, selectedCity?.id],
      queryFn: () => getAllFreetters(size, page, selectedCity?.nome),
      staleTime: 1000 * 60,
      enabled: !!citiesData,
    },
  );

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;

    setSelectedCityId(value || undefined);
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
            <option key={city.id} value={city.id}>
              {city.nome}
            </option>
          ))}
        </select>
      </div>

      {isLoading && (
        <p className="text-center text-gray-600">Carregando Freteiros...</p>
      )}

      {freetterersData && (
        <Freetter initialData={freetterersData} city={selectedCity} />
      )}
    </div>
  );
}
