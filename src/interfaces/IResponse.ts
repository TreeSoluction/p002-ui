export interface IResponse<T> {
  data: T;
  page?: number;
  size?: number;
  totalPages?: number;
}
