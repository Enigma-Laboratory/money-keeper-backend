import { omit } from 'lodash';

export function removeFieldsNotUse<T extends object>(data: T): T {
  return omit(data, '__v', '_id') as T;
}
