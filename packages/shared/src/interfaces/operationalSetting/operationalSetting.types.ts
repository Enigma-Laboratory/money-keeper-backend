/**
 * Enum defining various operational setting events with descriptions.
 */
export enum OperationalSettingEvent {
  /**
   * Event emitted when a new setting is created.
   */
  CREATED = 'operational_setting:created',

  /**
   * Event emitted when an existing setting is updated.
   */
  UPDATED = 'operational_setting:updated',

  /**
   * Event emitted when a setting is deleted.
   */
  DELETED = 'operational_setting:deleted',

  /**
   * Event for requesting the creation of a new setting.
   */
  CREATE = 'operational_setting:create',

  /**
   * Event for requesting the update of an existing setting.
   */
  UPDATE = 'operational_setting:update',

  /**
   * Event for requesting to read a setting.
   */
  READ = 'operational_setting:read',

  /**
   * Event for requesting the deletion of a setting.
   */
  DELETE = 'operational_setting:delete',
}
