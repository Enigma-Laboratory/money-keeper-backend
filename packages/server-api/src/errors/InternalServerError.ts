import { HttpError } from './httpError';

export class InternalServerError extends HttpError {
  constructor(message: string = 'Internal Server Error', component?: string) {
    super(500, message, 'InternalServerError', component);
  }
}
