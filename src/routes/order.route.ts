import express from "express";
import * as OrderDetailComponent from "../components/order/orderDetail";
import * as OrderComponent from "../components/order";

const route = express.Router();

route.post(
  "/create-order-detail",
  OrderDetailComponent.postCreateOrderDetailHandler
);

route.get("/", OrderComponent.getAllOrderHandler);

route.get("/get-one-order/:id", OrderComponent.getOneOrderHandler);

route.post("/create-order", OrderComponent.postCreateOrderHandler);

route.delete("/delete-order", OrderComponent.deleteOneOrderHandler);

route.patch("/update-order", OrderComponent.patchOneOrderHandler);

export default route;
