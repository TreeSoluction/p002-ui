import { IResponse } from "@/interfaces/IResponse";
import { IStore } from "@/interfaces/IStore";
import { api } from "./api";

export async function getAllStores(
  size: number = 10,
  page: number = 0,
  category: string,
  cityId?: string,
): Promise<IResponse<IStore[]>> {
  const response = await api.get(`/lojas`, {
    params: {
      size,
      page,
      category,
      cityId,
    },
  });

  return {
    data: response.data.data || [],
    totalPages: response.data.totalPages,
    size: response.data.size,
    page: response.data.page,
  };
}
