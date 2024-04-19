import { Types, Schema, Document, model } from 'mongoose';
import { OrderDetailMode } from 'packages';

const orderDetailSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
      default: () => new Types.ObjectId().toString(),
    },
    orderId: { type: Types.ObjectId, required: true, ref: 'Order' },
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    userIds: [{ type: Types.ObjectId, required: true, ref: 'User' }],
    mode: {
      type: String,
      enum: ['default', 'customized'],
      default: 'default',
    },
  },
  {
    timestamps: true,
    primaryKey: 'id',
  },
);

export interface OrderDetailDocument extends Document {
  id: string;
  orderId: string;
  name: string;
  description?: string;
  price: number;
  userIds: string[];
  mode: OrderDetailMode;
  createdAt: Date;
  updatedAt: Date;
}

const OrderDetailModel = model<OrderDetailDocument>('OrderDetail', orderDetailSchema);

export default OrderDetailModel;
