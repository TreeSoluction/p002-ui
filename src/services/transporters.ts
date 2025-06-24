import { IResponse } from "@/interfaces/IResponse";
import { ITransportes } from "@/interfaces/ITransportes";
import { api } from "./api";

export async function getAllTransporters(
  size: number = 10,
  page: number = 0,
): Promise<IResponse<ITransportes[]>> {
  const response = await api.get(`/transportadoras`, {
    params: {
      size,
      page,
    },
  });

  return {
    data: response.data.data,
    totalPages: response.data.totalPages,
    size: response.data.size,
    page: response.data.page,
  };
}
