import { IFreetter } from "@/interfaces/IFreetter";
import { IResponse } from "@/interfaces/IResponse";
import { api } from "./api";

export async function getAllFreetters(
  size: number = 10,
  page: number = 0,
  cidade?: string,
): Promise<IResponse<IFreetter[]>> {
  const response = await api.get(`/freteiros`, {
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
