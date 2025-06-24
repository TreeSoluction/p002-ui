import { IResponse } from "@/interfaces/IResponse";
import { ITour } from "@/interfaces/ITours";
import { api } from "./api";

export async function fetchExcursionsByUF(
  uf: string,
  size: number = 10,
  page: number = 0,
): Promise<IResponse<ITour[]>> {
  const response = await api.get(`/excursoes`, {
    params: {
      uf,
      size,
      page,
    },
  });

  return response.data;
}
