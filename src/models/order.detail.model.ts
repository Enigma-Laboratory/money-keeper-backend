import mongoose from "mongoose";

const orderDetailSchema = new mongoose.Schema({
  orderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Order",
    required: true,
  },
  product: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

export interface OrderDetailDocument extends mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
}

const OrderDetail = mongoose.model<OrderDetailDocument>(
  "OrderDetail",
  orderDetailSchema
);

export default OrderDetail;
