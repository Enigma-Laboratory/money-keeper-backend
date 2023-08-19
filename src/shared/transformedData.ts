import { omit } from 'lodash';

export function removeFieldsNotUse<T extends object>(data: T, array?: string[]): T {
  return omit(data, '__v', '_id', ...(array || [])) as T;
}
