import { STATUS_CODES } from 'http';

export class HttpError extends Error {
  status: number;
  message: string;
  component?: string;
  constructor(status?: number, message?: string, name?: string, component?: string) {
    super(message);
    this.status = status || 500;
    this.message = message || STATUS_CODES[this.status] || 'HttpError';
    if (component) this.component = component;
  }
<<<<<<< Updated upstream
=======
  toObject() {
    return {
      status: this.status,
      message: this.message,
      stack: this.stack,
      ...(this.component && { component: this.component }),
    };
  }
>>>>>>> Stashed changes
}
