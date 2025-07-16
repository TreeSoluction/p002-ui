import { ICarousel } from "@/interfaces/ICarousel";
import { IResponse } from "@/interfaces/IResponse";
import { api } from "./api";

export async function getAllCarouselImages(
  size: number = 10,
  page: number = 0,
): Promise<IResponse<ICarousel[]>> {
  const response = await api.get(`/carrosel`, {
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
