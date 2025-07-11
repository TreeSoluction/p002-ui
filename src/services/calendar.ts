import { ICalendar } from "@/interfaces/ICalendar";
import { IResponse } from "@/interfaces/IResponse";
import { api } from "./api";

export async function getAllCalendars(
  size: number = 10,
  page: number = 0,
): Promise<IResponse<ICalendar[]>> {
  const response = await api.get(`/calendario`, {
    params: {
      size,
      page,
    },
  });

  return {
    data: response.data.data || [],
    totalPages: response.data.totalPages,
    size: response.data.size,
    page: response.data.page,
  };
}

export async function getCalendarById(
  id: string,
): Promise<IResponse<ICalendar>> {
  const response = await api.get(`/calendario/${id}`);

  return {
    data: response.data,
  };
}
