import { Router } from "express";
import { productsRouters } from "./productsRoutes";

const routes = Router();

routes.use("/products", productsRouters);

export { routes };
