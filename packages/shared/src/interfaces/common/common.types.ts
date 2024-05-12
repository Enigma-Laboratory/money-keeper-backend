/**
 * Enum defining various socket events with descriptions.
 */
export enum SocketEvents {
  /**
   * Event emitted when a socket connection is established.
   */
  CONNECTION = 'connection',

  /**
   * Event emitted when a socket connection is terminated.
   */
  DISCONNECT = 'disconnect',

  /**
   * Event emitted when a message is received via the socket connection.
   */
  MESSAGE_RECEIVED = 'message_received',

  /**
   * Event emitted when a socket join room.
   */
  JOIN_ROOM = 'join_room',
}
