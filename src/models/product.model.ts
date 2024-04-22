import { Schema, Document, model } from 'mongoose';

export interface ProductDocument extends Document {
  id: string;
  name: string;
  quantity: number;
  isActive?: boolean;
  userIds: string[];
  description?: string;
  price: number;
  image?: string;
  createdAt: Date;
  updatedAt: Date;
  note?: string;
}

export const productSchema = new Schema(
  {
    name: { type: String, required: true },
    quantity: { type: Number, required: true },
    isActive: { type: Boolean, default: true },
    userIds: { type: [String], required: true },
    description: { type: String },
    price: { type: Number, required: true },
    image: { type: String },
    note: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  },
);

const ProductModel = model<ProductDocument>('Product', productSchema);

export default ProductModel;
