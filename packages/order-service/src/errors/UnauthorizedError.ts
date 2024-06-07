import { HttpError } from './httpError';

export class UnauthorizedError extends HttpError {
  constructor(message: string = 'Unauthorized', component?: string) {
    super(401, message, 'UnauthorizedError', component);
  }
}
