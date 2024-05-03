import { HttpError } from './httpError';

export class ForbiddenError extends HttpError {
  constructor(message: string = 'Forbidden', component?: string) {
    super(403, message, 'ForbiddenError', component);
  }
}
