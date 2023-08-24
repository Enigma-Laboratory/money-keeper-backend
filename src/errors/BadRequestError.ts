import { HttpError } from './httpError';

export class BadRequestError extends HttpError {
  constructor(message: string = 'Bad request', component?: string) {
    super(400, message, 'BadRequestError', component);
  }
}
