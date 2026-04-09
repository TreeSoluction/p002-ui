import { useEffect, useState } from "react";
import { FeaturesScroll } from "../../components/feature-scroll";
import type { ICity } from "../../interfaces/ICity";
import { getAllCities } from "../../services/cities";
import Tours from "./components/tours";

export default function Page() {
  const [city, setCity] = useState<ICity | undefined>();
  const [cityId, setCityId] = useState<string | undefined>();

  useEffect(() => {
    const load = async () => {
      const response = await getAllCities();
      const citiesData = response.data;

      const params = new URLSearchParams(window.location.search);
      const queryCityId = params.get("cityId");

      if (queryCityId) {
        setCityId(queryCityId);
        const foundCity = citiesData.find(
          (c: { id: number }) => c.id === +queryCityId,
        );
        setCity(foundCity);
      }
    };

    load();
  }, []);

  return (
    <>
      <FeaturesScroll cityId={cityId} />

      <div className="flex flex-col items-center justify-center gap-4 mt-6 px-4">
        <img src="/icon/tours.svg" alt="Excursões" width={100} height={100} />

        <h1 className="text-3xl font-semibold">Excursões</h1>
      </div>

      <Tours city={city} />
    </>
  );
}
