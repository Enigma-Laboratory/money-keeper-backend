import express from "express";
import * as ProductComponent from "../components/product";

const route = express.Router();
/**
 * post /product
 * @summary post create product
 *
 * @tags Product
 *
 * @security BearerAuth
 *
 * @param {Product} optional by Product model
 **
 * @return {Product} 200 - Return product when created - application/json
 * @return {Error} default - Unexpected error - application/json
 */
route.post("/create-product", ProductComponent.createProductHandler);

/**
 * get /Product
 * @summary get one product
 *
 * @tags Product
 *
 * @security BearerAuth
 *
 * @param {string} id - The unique id of product
 **
 * @return {Product} 200 - Return product by id - application/json
 * @return {Error} default - Unexpected error - application/json
 */
route.get("/get-one-product/:id", ProductComponent.getOneProductHandler);

/**
 * get /order
 * @summary get all order
 *
 * @tags Order
 *
 * @security BearerAuth
 *
 * @param {string} id - The unique find all params
 **
 * @return {Array<Product>} 200 - Return array product - application/json
 * @return {Error} default - Unexpected error - application/json
 */
route.get("/all-product", ProductComponent.getAllProductHandler);
export default route;
