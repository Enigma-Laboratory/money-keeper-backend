import { HttpError } from './httpError';

export class NotFoundError extends HttpError {
  constructor(message: string = 'Not Found', component?: string) {
    super(404, message, 'NotFoundError', component);
  }
}
