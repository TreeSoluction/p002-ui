import { IKiosk } from "@/interfaces/IKiosk";
import { IResponse } from "@/interfaces/IResponse";
import { api } from "./api";

export async function getAllKiosks(
  size: number = 10,
  page: number = 0,
  cidade?: string,
): Promise<IResponse<IKiosk[]>> {
  const response = await api.get(`/quiosques`, {
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

export async function getKioskById(id: string): Promise<IResponse<IKiosk>> {
  const response = await api.get(`/quiosques/${id}`);

  return {
    data: response.data,
    totalPages: response.data.totalPages,
    size: response.data.size,
    page: response.data.page,
  };
}
