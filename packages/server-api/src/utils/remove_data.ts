import OrderModal from "@/models/order.detail.model";
import OrderDetailModal from "@/models/order.model";
import UserDetailModal from "@/models/user.model";
import express, { NextFunction, Request, Response } from "express";

const route = express.Router();

route.delete(
  "/users",
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const user = await UserDetailModal.deleteMany({});
      res.status(200).send(user);
    } catch (e: any) {
      next(e);
    }
  }
);

route.delete(
  "/orders",
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const user = await OrderModal.deleteMany({});
      res.status(200).send(user);
    } catch (e: any) {
      next(e);
    }
  }
);

route.delete(
  "/order-details",
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const user = await OrderDetailModal.deleteMany({});
      res.status(200).send(user);
    } catch (e: any) {
      next(e);
    }
  }
);

export default route;
