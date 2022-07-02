export interface Data<T> {
  items: ArrayLike<T>;
  offset: number;
  limit: number;
  total: number;
}
