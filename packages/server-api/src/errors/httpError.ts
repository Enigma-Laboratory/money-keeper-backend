import { STATUS_CODES } from 'http';

export class HttpError extends Error {
  status: number;
  message: string;
  component?: string;
  constructor(status?: number, message?: string, name?: string, component?: string) {
    super(message);
    this.status = status || 500;
    this.message = message || STATUS_CODES[this.status] || 'HttpError';
    Error.captureStackTrace(this, this.constructor);
    if (component) this.component = component;
  }
  toObject() {
    return {
      status: this.status,
      message: this.message,
      stack: this.stack,
      ...(this.component && { component: this.component }),
    };
  }
}
