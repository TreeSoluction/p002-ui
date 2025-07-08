// app/segment/components/segment-page-client.tsx
"use client";

import { CitiesCarousel } from "@/components/cities-scroll";
import { FeaturesScroll } from "@/components/feature-scroll";
import { ICity } from "@/interfaces/ICity";
import { useState } from "react";
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
    initialCityId,
  );

  const handleCityChange = (city: ICity) => {
    const newCityId = city.id.toString();
    setCurrentCityId(newCityId);
  };

  return (
    <>
      <FeaturesScroll cityId={currentCityId} />

      <>Selecione uma cidade</>

      <CitiesCarousel
        cities={cities}
        defaultCity={initialCity}
        onCityChange={handleCityChange}
      />

      <Segments cityId={currentCityId} />
    </>
  );
}
