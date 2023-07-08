import express from "express";
import * as AuthComponent from "../components/auth/index";

const route = express.Router();

route.post("/create-user", AuthComponent.createUserHandler);
route.get("/user/:email", AuthComponent.getOneUserHandler);
route.get("/users", AuthComponent.getAllUsesHandler);

export default route;
