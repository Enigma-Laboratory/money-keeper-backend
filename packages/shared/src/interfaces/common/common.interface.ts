/**
 * This interface represents the parameters for finding multiple items within a certain scope.
 * It can be used to specify sorting, pagination, and filtering options.
 */
export interface FindAllParams<Scope = string> {
  /** The scope in which to search for items. It can be of type Scope or a string. */
  scope?: Scope | string;

  /** An array of strings representing the fields by which the items should be sorted. */
  sorters?: Array<string>;

  /** The page number for pagination. Specifies which page of results to retrieve. */
  page?: number;

  /** The number of items to include in a single page of results. */
  pageSize?: number;
}

/**
 * This interface represents the parameters for fetching a single item by its ID.
 */
export interface GetOneParams<T = string> {
  /** The ID of the item to fetch. */
  _id: string;
}

/**
 * This interface represents the response structure when finding multiple items.
 */
export interface FindAllResponse<T> {
  /** The total count of items that match the search criteria. */
  count: number;

  /** An array containing the actual items retrieved based on the search criteria. */
  rows: Array<T>;
}
