"use client";

import { ICity } from "@/interfaces/ICity";
import { IResponse } from "@/interfaces/IResponse";
import { IRestaurant } from "@/interfaces/IRestaurant";
import { getAllRestaurants } from "@/services/restaurants";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import RestaurantCard from "./card";

interface RestaurantProps {
  initialData: IResponse<IRestaurant[]>;
  city?: ICity;
}

export default function Restaurant({ initialData, city }: RestaurantProps) {
  const [page, setPage] = useState(initialData.page ?? 0);
  const size = initialData.size ?? 10;

  const { data, isLoading } = useQuery<IResponse<IRestaurant[]>>({
    queryKey: ["restaurantes", page, city],
    queryFn: () => getAllRestaurants(size, page, city?.nome),
    placeholderData: page === initialData.page ? initialData : undefined,
    staleTime: 1000 * 60,
  });

  const restaurantData = data ?? { data: [], totalPages: 0, page: 0, size };

  return (
    <div className="py-8 px-4">
      {isLoading ? (
        <p className="text-center text-gray-600">Carregando restaurantes...</p>
      ) : restaurantData.data.length > 0 ? (
        <>
          <ul className="max-w-3xl mx-auto space-y-4">
            {restaurantData.data.map((item) => (
              <RestaurantCard key={item.id} restaurant={item} />
            ))}
          </ul>

          <div className="flex justify-center items-center gap-4 mt-6">
            <button
              onClick={() => setPage((p) => Math.max(p - 1, 0))}
              disabled={page === 0}
              className="px-4 py-2 bg-blue-800 text-white rounded disabled:opacity-50"
            >
              Anterior
            </button>
            <span className="text-sm text-gray-600">Página {page + 1}</span>
            <button
              onClick={() => setPage((p) => p + 1)}
              disabled={
                page + 1 >= (restaurantData.totalPages ?? 0) ||
                (restaurantData.totalPages ?? 0) === 0
              }
              className="px-4 py-2 bg-blue-800 text-white rounded disabled:opacity-50"
            >
              Próxima
            </button>
          </div>
        </>
      ) : (
        <div className="text-center text-gray-600 mt-8">
          <p className="text-lg">😕 Nenhum transporte encontrado.</p>
          <p className="text-sm mt-1">Tente novamente mais tarde!</p>
        </div>
      )}
    </div>
  );
}
