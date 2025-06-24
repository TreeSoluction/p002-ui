import { IResponse } from "@/interfaces/IResponse";
import { ITransportes } from "@/interfaces/ITransportes";
import { api } from "./api";

export async function getAllTransporters(
  uf: string,
  size: number = 10,
  page: number = 0,
): Promise<IResponse<ITransportes>> {
  const response = await api.get(`/excursoes`, {
    params: {
      uf,
      size,
      page,
    },
  });

  return response.data;
}
