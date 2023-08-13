import { Document, Schema, Types, model } from 'mongoose';
import bcrypt from 'bcrypt';
import { User } from '../components/customer/interface';

export interface UserDocument extends User, Document {
  id: string;
  createdAt: Date;
  updateAt: Date;
  comparePassword(candidatePassword: String): Promise<Boolean>;
}

const userSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
      default: () => new Types.ObjectId().toString(),
    },
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
    address: { type: String, required: false },
    numberPhone: { type: String, required: false },
  },
  {
    timestamps: true,
    primaryKey: 'id',
  },
);

userSchema.pre('save', async function (next) {
  let user = this as unknown as UserDocument;

  if (!user.isModified('password')) {
    return next();
  }
  const salt = await bcrypt.genSalt(Number(process.env.SALT_WORK_FACTOR) || 0);

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
