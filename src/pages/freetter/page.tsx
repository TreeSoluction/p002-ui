import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { FeaturesScroll } from "../../components/feature-scroll";
import type { ICity } from "../../interfaces/ICity";
import { getAllCities } from "../../services/cities";
import FreetterWithCityFilter from "./components/freetterFilters";

export default function Page() {
  const [city, setCity] = useState<ICity | undefined>();
  const [searchParams] = useSearchParams();

  const cityId = searchParams.get("cityId") ?? undefined;

  useEffect(() => {
    (async () => {
      const request = await getAllCities();
      const citiesData = request.data;

      if (cityId) {
        const foundCity = citiesData.find(
          (c: { id: number }) => c.id === Number(cityId),
        );
        setCity(foundCity);
      }
    })();
  }, [cityId]);

  return (
    <>
      <FeaturesScroll cityId={cityId} />

      <div className="flex flex-col items-center justify-center gap-4 mt-6 px-4">
        <img
          src="/icon/freetter.svg"
          alt="Freteiros"
          width={100}
          height={100}
        />

        <h1 className="text-3xl font-semibold">Freteiros</h1>
      </div>

      <FreetterWithCityFilter city={city} />
    </>
  );
}
