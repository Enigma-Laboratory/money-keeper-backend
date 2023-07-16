import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  orderNumber: {
    type: String,
    required: true,
    unique: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});

export interface OrderDocument extends mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
}

const Order = mongoose.model<OrderDocument>("Order", orderSchema);

export default Order;
