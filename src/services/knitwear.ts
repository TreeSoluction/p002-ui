import { IKnitwear } from "@/interfaces/IKnitwear";
import { IResponse } from "@/interfaces/IResponse";
import { api } from "./api";

export async function getAllKnitwears(
  size: number = 10,
  page: number = 0,
  cidade?: string,
): Promise<IResponse<IKnitwear[]>> {
  const response = await api.get(`/malharias`, {
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
