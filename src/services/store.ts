import { IResponse } from "@/interfaces/IResponse";
import { IStore } from "@/interfaces/IStore";
import { api } from "./api";

export async function getAllStores(data: {
  size?: number;
  page?: number;
  nome?: string;
  cidade?: string;
  categoria?: string;
}): Promise<IResponse<IStore[]>> {
  const { size = 10, page = 0, nome, cidade, categoria } = data;

  const params: Record<string, unknown> = {
    size,
    page,
  };

  if (nome) params.nome = nome;
  if (cidade) params.cidade = cidade;
  if (categoria) params.categoria = categoria;

  const response = await api.get(`/lojas`, { params });

  return {
    data: response.data.data || [],
    totalPages: response.data.totalPages,
    size: response.data.size,
    page: response.data.page,
  };
}

export async function getStoreById(id: string): Promise<IResponse<IStore>> {
  const response = await api.get(`/lojas/${id}`);

  return {
    data: response.data,
  };
}
