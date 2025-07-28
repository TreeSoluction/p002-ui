import { IResponse } from "@/interfaces/IResponse";
import { ISegment } from "@/interfaces/ISegment";
import { api } from "./api";

export async function getAllSegments(
  size: number = 9999,
  page: number = 0,
): Promise<IResponse<ISegment[]>> {
  const response = await api.get(`/categorias`, {
    params: {
      size,
      page,
    },
  });

  return {
    data: response.data.data || [],
    page: response.data.page,
    size: response.data.size,
    totalPages: response.data.totalPages,
  };
}
