import { IAccommodation } from "@/interfaces/IAccommodation";
import { IResponse } from "@/interfaces/IResponse";
import { api } from "./api";

export async function getAllAccommodations(
  size: number = 10,
  page: number = 0,
): Promise<IResponse<IAccommodation[]>> {
  const response = await api.get(`/hospedagens`, {
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
