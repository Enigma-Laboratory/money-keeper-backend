import express from "express";
import * as ProductComponent from "../components/product";

const route = express.Router();

route.post("/create-product", ProductComponent.createProductHandler);
route.get("/get-one-product/:id", ProductComponent.getOneProductHandler);
route.get("/all-product", ProductComponent.getAllProductHandler);
export default route;
