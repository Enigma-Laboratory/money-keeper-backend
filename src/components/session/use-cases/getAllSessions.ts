import { FilterQuery } from 'mongoose';
import SessionModel, { SectionDocument } from '@/models/session.model';

export async function findSessions(query: FilterQuery<SectionDocument>) {
  return SessionModel.find(query).lean();
}
