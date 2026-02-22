import { Router } from "express";
import { ProductController } from "@/controllers/productsController";

const productsRouters = Router();
const productsController = new ProductController();

productsRouters.get("/", productsController.index);
productsRouters.post("/", productsController.create);
productsRouters.put("/:id", productsController.update);
productsRouters.delete("/:id", productsController.remove);

export { productsRouters };
