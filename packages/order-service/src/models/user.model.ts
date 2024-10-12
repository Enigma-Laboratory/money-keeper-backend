import Config from '@/services/configServices';
import { User } from '@enigma-laboratory/shared';
import bcrypt from 'bcrypt';
import { Document, Schema, model } from 'mongoose';

export interface UserDocument extends User, Document {
  _id: string;
  createdAt: Date;
  updateAt: Date;
  comparePassword(candidatePassword: String): Promise<Boolean>;
}

export const userSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
    address: { type: String, required: false },
    numberPhone: { type: String, required: false },
    image: { type: String, required: false },
    role: { type: String, required: true, enum: ['user', 'admin'], default: 'user' },
  },
  {
    timestamps: true,
  },
);

userSchema.pre('save', async function (next) {
  let user = this as unknown as UserDocument;

  if (!user.isModified('password')) {
    return next();
  }
  const salt = await bcrypt.genSalt(Config.instance.saltWorkFactor);

  const hash = bcrypt.hashSync(user.password, salt);

  user.password = hash;

  return next();
});

userSchema.methods.comparePassword = async function (candidatePassword: string): Promise<boolean> {
  const user = this as UserDocument;

  return bcrypt.compare(candidatePassword, user.password).catch(e => false);
};

const UserModel = model<UserDocument>('User', userSchema);

export default UserModel;
