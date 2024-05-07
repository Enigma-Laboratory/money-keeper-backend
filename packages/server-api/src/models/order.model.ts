import { LogOrderEvent, Order, OrderStatus, Product } from '@enigma-laboratory/shared';
import { Document, Schema, model } from 'mongoose';
import { productSchema } from './product.model';

export interface OrderDocument extends Order, Document {
  _id: string;
  name: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
  createdOrderAt: Date;
  status: OrderStatus;
  products: Product[];
  event: LogOrderEvent[];
  orderNumber: number;
  groupId: string;
}

const orderEventSchema = new Schema({
  date: { type: Date, required: true },
  status: { type: String, required: true },
  userId: { type: String, required: true },
});

const orderSchema: Schema<OrderDocument> = new Schema<OrderDocument>({
  name: { type: String, required: true },
  userId: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  createdOrderAt: { type: Date, required: true },
  status: { type: String, required: true },
  products: { type: [productSchema], required: true }, // Reference to Product documents
  event: { type: [orderEventSchema], required: true }, // Embedded array of OrderEvent documents
  orderNumber: { type: Number },
  groupId: { type: String, required: true },
});

orderSchema.pre<OrderDocument>('save', async function (next) {
  if (!this.orderNumber) {
    const latestOrder = await OrderModel.findOne({}, {}, { sort: { createdAt: -1 } }); // Get the latest order
    const orderNumber = latestOrder ? latestOrder.orderNumber + 1 : 1; // Increment the order number
    this.orderNumber = orderNumber;
  }
  next();
});

const OrderModel = model<OrderDocument>('Order', orderSchema);

export default OrderModel;
