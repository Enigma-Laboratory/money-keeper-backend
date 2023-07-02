import { FilterQuery } from "mongoose";
import SessionModel, { SectionDocument } from "../models/session.model";

export async function createSession(userId: string, userAgent: string) {
  try {
    const session = await SessionModel.create({ user: userId, userAgent });
    return session.toJSON();
  } catch (e: any) {
    throw new Error(e);
  }
}

export async function findSessions(query: FilterQuery<SectionDocument>) {
  return SessionModel.find(query).lean();
}
