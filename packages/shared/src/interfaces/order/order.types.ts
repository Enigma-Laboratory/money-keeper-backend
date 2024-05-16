/**
 * Enum defining various order statuses with descriptions.
 */
export enum OrderStatus {
  /**
   * The order is currently being processed when user create new order
   */
  PROCESSING = 'processing',

  /**
   * The order has been confirmed.
   */
  CONFIRM = 'confirm',

  /**
   * The order is completed.
   */
  DONE = 'done',

  /**
   * The order has been cancelled.
   */
  CANCELLED = 'cancelled',
}

/**
 * Enum defining various order-related events with descriptions.
 */
export enum OrderEvent {
  /**
   * Event emitted when a new order is created.
   */
  CREATED = 'order:created',

  /**
   * Event emitted when an existing order is updated.
   */
  UPDATED = 'order:updated',

  /**
   * Event emitted when an order is deleted.
   */
  DELETED = 'order:deleted',

  /**
   * Event for requesting the creation of a new order.
   */
  CREATE = 'order:create',

  /**
   * Event for requesting the update of an existing order.
   */
  UPDATE = 'order:update',

  /**
   * Event for requesting to read an order.
   */
  READ = 'order:read',

  /**
   * Event for requesting the deletion of an order.
   */
  DELETE = 'order:delete',
}
