import { Order } from '../interfaces';

/**
 * Extracts unique user IDs from a list of products.
 *
 * @param products - An array of Product objects from an Order.
 * @returns An array of unique user IDs.
 */
export const uniqueUserIdsByProduct = (products: Order['products']): string[] => {
  return Array.from(new Set(products.flatMap(({ userIds }) => userIds)));
};
