import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { FeaturesScroll } from "../../components/feature-scroll";
import type { ICity } from "../../interfaces/ICity";
import { getAllCities } from "../../services/cities";
import ParkingWithCityFilter from "./components/parkingsFilters";

export default function Page() {
  const [city, setCity] = useState<ICity | undefined>();

  const [searchParams] = useSearchParams();
  const cityId = searchParams.get("cityId");

  useEffect(() => {
    const load = async () => {
      if (!cityId) {
        setCity(undefined);
        return;
      }

      const cities = (await getAllCities()).data;
      const foundCity = cities.find(
        (c: { id: number }) => c.id === Number(cityId),
      );
      setCity(foundCity);
    };

    load();
  }, [cityId]);

  return (
    <>
      <FeaturesScroll cityId={cityId ?? undefined} />

      <div className="flex flex-col items-center justify-center gap-4 mt-6 px-4">
        <img
          src="/icon/parking-2.svg"
          alt="Excursões"
          width={100}
          height={100}
        />

        <h1 className="text-3xl font-semibold">Estacionamentos</h1>
      </div>

      <ParkingWithCityFilter city={city} />
    </>
  );
}
