import { FeaturesScroll } from "@/components/feature-scroll";
import { ICity } from "@/interfaces/ICity";
import { getAllCities } from "@/services/cities";
import KioskWithCityFilter from "./components/kioskFilters";

import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function Page() {
  const [searchParams] = useSearchParams();
  const cityIdParam = searchParams.get("cityId");

  const [city, setCity] = useState<ICity | undefined>();
  const [cityId, setCityId] = useState<string | undefined>(
    cityIdParam || undefined,
  );

  useEffect(() => {
    async function loadData() {
      const resp = await getAllCities();
      const citiesData = resp.data;

      if (cityIdParam) {
        setCityId(cityIdParam);
        const found = citiesData.find((c: ICity) => c.id === +cityIdParam);
        setCity(found);
      }
    }
    loadData();
  }, [cityIdParam]);

  return (
    <>
      <FeaturesScroll cityId={cityId} />

      <div className="flex flex-col items-center justify-center gap-4 mt-6 px-4">
        <img
          src={"/icon/kiosk.svg"}
          alt={"Excusões"}
          width={100}
          height={100}
        />

        <h1 className="text-3xl font-semibold">Quiosques</h1>
      </div>

      <KioskWithCityFilter city={city} />
    </>
  );
}
