import { User } from '@enigma-laboratory/shared';
import { Document, Schema, model } from 'mongoose';

export interface RefreshTokenDocument extends Document {
  token: String;
  expiresAt: Date;
  user: User;
}

const refreshTokenSchema = new Schema<RefreshTokenDocument>({
  token: { type: String, required: true, unique: true },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  expiresAt: { type: Date, required: true },
});

const RefreshTokenModel = model<RefreshTokenDocument>('refresh_token', refreshTokenSchema);

export default RefreshTokenModel;
