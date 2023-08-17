import SessionModel, { SectionDocument } from '@/models/session.model';
import { FilterQuery } from 'mongoose';

export async function findSessions(query: FilterQuery<SectionDocument>) {
  return SessionModel.find(query).lean();
}
