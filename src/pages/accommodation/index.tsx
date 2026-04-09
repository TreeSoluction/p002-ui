import { FeaturesScroll } from "../../components/feature-scroll";
import type { ICity } from "../../interfaces/ICity";
import { getAllCities } from "../../services/cities";

import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import AccommodationWithCityFilter from "./components/accommodationFilters";

export default function Page() {
  const [city, setCity] = useState<ICity | undefined>();
  const [searchParams] = useSearchParams();

  const cityId = searchParams.get("cityId") ?? undefined;

  useEffect(() => {
    async function loadCities() {
      const response = await getAllCities();
      const citiesData = response.data;

      if (cityId) {
        const foundCity = citiesData.find(
          (c: { id: number }) => c.id === Number(cityId),
        );
        setCity(foundCity);
      }
    }

    loadCities();
  }, [cityId]);

  return (
    <>
      <FeaturesScroll cityId={cityId} />

      <div className="flex flex-col items-center justify-center gap-4 mt-6 px-4">
        <img
          src="/icon/accommodation.svg"
          alt="Excursões"
          width={100}
          height={100}
        />

        <h1 className="text-3xl font-semibold">Hospedagens</h1>
      </div>

      <AccommodationWithCityFilter city={city} />
    </>
  );
}
