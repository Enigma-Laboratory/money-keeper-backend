import { HttpError } from './httpError';

export class ConflictError extends HttpError {
  constructor(message: string = 'Conflict', component?: string) {
    super(409, message, 'ConflictError', component);
  }
}
