export interface FindAllParams<Scope = string> {
  scope?: Scope | string;
  sorters?: Array<string>;
  page?: number;
  pageSize?: number;
}

export interface getOneParams<T = string> {
  id?: string;
}

export interface FindAllResponse<T> {
  count: number;
  rows: Array<T>;
}
