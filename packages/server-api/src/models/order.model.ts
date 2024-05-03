import { Order, OrderEvent, OrderStatus, Product, User } from '@enigma-laboratory/shared';
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
  amount: number;
  products?: Product[];
  user?: User;
  event?: OrderEvent[];
  orderNumber: number;
  groupId?: string;
}

const orderEventSchema = new Schema({
  date: { type: Date, required: true },
  status: { type: String, required: true },
});

const orderSchema: Schema<OrderDocument> = new Schema<OrderDocument>({
  name: { type: String, required: true },
  userId: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  createdOrderAt: { type: Date, required: true },
  status: { type: String, required: true },
  amount: { type: Number, required: true },
  products: [productSchema], // Reference to Product documents
  user: { type: Schema.Types.ObjectId, ref: 'User' }, // Reference to User document
  event: [orderEventSchema], // Embedded array of OrderEvent documents
  orderNumber: { type: Number }, // Order number
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
