import { ICity } from "@/interfaces/ICity";
import { IResponse } from "@/interfaces/IResponse";
import { api } from "./api";

export async function getCities(
  size: number = 10,
  page: number = 0,
): Promise<IResponse<ICity[]>> {
  const response = await api.get(`/cidades`, {
    params: {
      size,
      page,
    },
  });

  return {
    data: response.data.data,
    page: response.data.page,
    size: response.data.size,
    totalPages: response.data.totalPages,
  };
}

export async function getCityById(id: string): Promise<IResponse<ICity>> {
  const response = await api.get(`/cidades/${id}`);

  return {
    data: response.data,
  };
}
