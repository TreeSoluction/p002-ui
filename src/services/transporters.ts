import { IResponse } from "@/interfaces/IResponse";
import { ITransport } from "@/interfaces/ITransport";
import { api } from "./api";

export async function getAllTransporters(
  size: number = 10,
  page: number = 0,
  cidade?: string,
): Promise<IResponse<ITransport[]>> {
  const response = await api.get(`/transportadoras`, {
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
