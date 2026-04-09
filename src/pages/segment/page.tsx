import { ICity } from "@/interfaces/ICity";
import { getAllCities } from "@/services/cities";
import { SegmentPageClient } from "./components/cities";

import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function Page() {
  const [searchParams] = useSearchParams();
  const cityIdParam = searchParams.get("cityId") ?? undefined;

  const [city, setCity] = useState<ICity | undefined>();
  const [cityId, setCityId] = useState<string | undefined>(cityIdParam);
  const [cities, setCities] = useState<ICity[]>([]);

  useEffect(() => {
    async function loadData() {
      const resp = await getAllCities();
      const citiesData = resp.data;
      setCities(citiesData);

      if (cityIdParam) {
        setCityId(cityIdParam);
        const found = citiesData.find((c: ICity) => c.id === +cityIdParam);
        setCity(found);
      }
    }
    loadData();
  }, [cityIdParam]);

  return (
    <SegmentPageClient
      cities={cities}
      initialCity={city}
      initialCityId={cityId}
    />
  );
}
