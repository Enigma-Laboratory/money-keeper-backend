import { Types, Schema, Document, model } from 'mongoose';
import { customAlphabet } from 'nanoid';

const nanoid = customAlphabet('abcdefghijklmnopqrstuvwxyz0123456789', 10);

export interface ProductDocument extends Document {
  id: string;
  name: string;
  user: string;
  description: string;
  image: string;
  price: number;
  createdAt: Date;
  updatedAt: Date;
}

const productSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
      default: () => `${nanoid()}`,
    },
    name: { type: String, required: true },
    description: { type: String, required: false },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    user: { type: Number, required: true },
  },
  {
    timestamps: true,
  },
);

const ProductModel = model<ProductDocument>('Product', productSchema);

export default ProductModel;
