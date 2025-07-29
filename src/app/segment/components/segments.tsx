"use client";

import { getCityById } from "@/services/cities";
import { useQuery } from "@tanstack/react-query";
import { SegmentCard } from "./card";

interface SegmentsProps {
  cityId?: string;
}

export function Segments({ cityId }: SegmentsProps) {
  const {
    data: cityData,
    isFetching,
    isRefetching,
  } = useQuery({
    queryKey: ["city", cityId],
    queryFn: () => getCityById(cityId!),
    enabled: !!cityId,
    staleTime: 60000,
  });

  const city = cityData?.data;

  if (isFetching || isRefetching) {
    return (
      <div className="text-center text-sm text-gray-500 mt-4">
        Carregando...
      </div>
    );
  }

  if (!city?.categorias?.length) {
    return (
      <div className="text-center text-sm text-gray-500 mt-4">
        Nenhuma categoria encontrada.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-4 sm:gap-6 mt-6 px-4">
      {city.categorias.map((segment, index) => (
        <SegmentCard key={index} segment={segment} cityId={cityId} />
      ))}
    </div>
  );
}
