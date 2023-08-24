import { omit } from 'lodash';

export function removeFieldsNotUse<T extends object>(data: T, params?: string[]): T {
  return omit(data, '__v', '_id', ...(params || [])) as T;
}
