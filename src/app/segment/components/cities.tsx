"use client";

import { CitiesCarousel } from "@/components/cities-scroll";
import { FeaturesScroll } from "@/components/feature-scroll";
import { ICity } from "@/interfaces/ICity";
import { useMemo, useState } from "react";
import Select from "react-select";
import { Segments } from "./segments";

interface SegmentPageClientProps {
  cities: ICity[];
  initialCity?: ICity;
  initialCityId?: string;
}

export function SegmentPageClient({
  cities,
  initialCity,
  initialCityId,
}: SegmentPageClientProps) {
  const [currentCityId, setCurrentCityId] = useState<string | undefined>(
    initialCity?.id.toString() ?? initialCityId,
  );

  const [selectedCityIdPending, setSelectedCityIdPending] = useState<
    string | undefined
  >(undefined);

  const handleInputChange = (option: { city: ICity } | null) => {
    if (!option) return;
    const newCityId = option.city.id.toString();
    if (newCityId === currentCityId || newCityId === selectedCityIdPending)
      return;
    setSelectedCityIdPending(newCityId);
  };

  const handleCarouselChange = (city: ICity) => {
    const cityId = city.id.toString();

    if (selectedCityIdPending === cityId) {
      setCurrentCityId(cityId);
      setSelectedCityIdPending(undefined);
    } else if (cityId !== currentCityId && !selectedCityIdPending) {
      setCurrentCityId(cityId);
    }
  };

  const selectedCity = useMemo(() => {
    const id = selectedCityIdPending ?? currentCityId;
    return cities.find((c) => c.id.toString() === id);
  }, [selectedCityIdPending, currentCityId, cities]);

  const options = useMemo(() => {
    return cities.map((city) => ({
      value: city.id,
      label: city.nome,
      city,
    }));
  }, [cities]);

  return (
    <>
      <FeaturesScroll cityId={currentCityId} />

      <div className="w-full px-4 md:px-0 md:max-w-md mx-auto mb-6">
        <label
          htmlFor="city-select"
          className="block text-sm font-medium mb-1 text-gray-700"
        >
          Selecione uma cidade
        </label>
        <Select
          inputId="city-select"
          className="mb-2"
          classNames={{
            control: () =>
              "border border-gray-300 shadow-sm hover:border-gray-400",
            input: () => "text-sm",
            option: () => "text-sm",
            menu: () => "z-50",
          }}
          styles={{
            control: (base, state) => ({
              ...base,
              borderRadius: 8,
              padding: 2,
              minHeight: 40,
              boxShadow: state.isFocused ? "0 0 0 1px #22c55e" : base.boxShadow,
              borderColor: state.isFocused ? "#22c55e" : base.borderColor,
              transition: "all 0.2s ease",
            }),
            option: (base, state) => ({
              ...base,
              backgroundColor: state.isSelected
                ? "#22c55e"
                : state.isFocused
                  ? "#e5f9ec"
                  : "white",
              color: state.isSelected ? "white" : "#1f2937",
              padding: 10,
              fontSize: 14,
              cursor: "pointer",
            }),
            singleValue: (base) => ({
              ...base,
              color: "#1f2937",
              fontSize: 14,
            }),
            menu: (base) => ({
              ...base,
              zIndex: 50,
            }),
          }}
          value={
            selectedCity
              ? {
                  value: selectedCity.id,
                  label: selectedCity.nome,
                  city: selectedCity,
                }
              : null
          }
          options={options}
          onChange={handleInputChange}
          placeholder="Digite o nome da cidade..."
          isSearchable
        />
      </div>

      <CitiesCarousel
        cities={cities}
        defaultCity={initialCity}
        selectedCityId={selectedCityIdPending}
        onCityChange={handleCarouselChange}
      />

      <Segments cityId={currentCityId} />
    </>
  );
}
