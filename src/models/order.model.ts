import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    orderName: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  },
  {
    timestamps: true,
  }
);

export interface OrderDocument extends mongoose.Document {
  orderName: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

const OrderModel = mongoose.model<OrderDocument>("Order", orderSchema);

export default OrderModel;
