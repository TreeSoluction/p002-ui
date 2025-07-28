"use client";

import { getCityById } from "@/services/cities";
import { useQuery } from "@tanstack/react-query";
import { SegmentCard } from "./card";

interface SegmentsProps {
  cityId?: string;
}

export function Segments({ cityId }: SegmentsProps) {
  const { data: cityData } = useQuery({
    queryKey: ["city", cityId],
    queryFn: () => getCityById(cityId!),
    enabled: !!cityId,
    staleTime: 0,
  });

  const city = cityData?.data;

  console.log(city);

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-4 sm:gap-6 mt-6 px-4">
      {city?.categorias.map((segment, index) => (
        <SegmentCard key={index} segment={segment} cityId={cityId} />
      ))}
    </div>
  );
}
