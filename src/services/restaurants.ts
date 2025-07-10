import { IResponse } from "@/interfaces/IResponse";
import { IRestaurant } from "@/interfaces/IRestaurant";
import { api } from "./api";

export async function getAllRestaurants(
  size: number = 10,
  page: number = 0,
  cidade?: string,
): Promise<IResponse<IRestaurant[]>> {
  const response = await api.get(`/restaurantes`, {
    params: {
      size,
      page,
      cidade,
    },
  });

  return {
    data: response.data.data || [],
    totalPages: response.data.totalPages,
    size: response.data.size,
    page: response.data.page,
  };
}
