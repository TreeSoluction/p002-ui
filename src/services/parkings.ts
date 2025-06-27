import { IParking } from "@/interfaces/IParking";
import { IResponse } from "@/interfaces/IResponse";
import { api } from "./api";

export async function getAllParkings(
  size: number = 10,
  page: number = 0,
): Promise<IResponse<IParking[]>> {
  const response = await api.get(`/estacionamentos`, {
    params: {
      size,
      page,
    },
  });

  return {
    data: response.data.data || [],
    totalPages: response.data.totalPages,
    size: response.data.size,
    page: response.data.page,
  };
}
