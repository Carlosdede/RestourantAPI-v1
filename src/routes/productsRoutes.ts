import { Router } from "express";
import { ProductController } from "@/controllers/productsController";

const productsRouters = Router();
const productsController = new ProductController();

productsRouters.get("/", productsController.index);

export { productsRouters };
