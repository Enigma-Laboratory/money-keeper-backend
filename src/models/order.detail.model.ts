import { Types, Schema, Document, model } from 'mongoose';

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
  },
  { timestamps: true, primaryKey: 'id' },
);

export interface OrderDetailDocument extends Document {
  createdAt: Date;
  updatedAt: Date;
}

const OrderDetailModel = model<OrderDetailDocument>('OrderDetail', orderDetailSchema);

export default OrderDetailModel;
