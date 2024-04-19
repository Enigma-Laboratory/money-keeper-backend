import { Types, Schema, Document, model } from 'mongoose';

const orderSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
      default: () => new Types.ObjectId().toString(),
    },
    name: { type: String, required: true },
    userId: { type: Types.ObjectId, ref: 'User' },
    createdOrderAt: { type: Date, required: true },
  },
  {
    timestamps: true,
    primaryKey: 'id',
  },
);

export interface OrderDocument extends Document {
  id: string;
  name: string;
  userId: string;
  createdOrderAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

const OrderModel = model<OrderDocument>('Order', orderSchema);

export default OrderModel;
