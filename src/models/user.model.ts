import mongoose from "mongoose";
import bcrypt from "bcrypt";
import config from "config";

export interface userInput {
  email: string;
  name: string;
  password: string;
}

export interface UserDocument extends userInput, mongoose.Document {
  createdAt: Date;
  updateAt: Date;
  comparePassword(candidatePassword: String): Promise<Boolean>;
}

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
    address: { type: String, required: false },
    numberPhone: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  let user = this as unknown as UserDocument;

  if (!user.isModified("password")) {
    return next();
  }

  const salt = await bcrypt.genSalt(config.get<number>("saltWorkFactor"));

  const hash = bcrypt.hashSync(user.password, salt);

  user.password = hash;

  return next();
});

userSchema.methods.comparePassword = async function (
  candidatePassword: string
): Promise<boolean> {
  const user = this as UserDocument;

  return bcrypt.compare(candidatePassword, user.password).catch((e) => false);
};

const UserModel = mongoose.model<UserDocument>("User", userSchema);

export default UserModel;
