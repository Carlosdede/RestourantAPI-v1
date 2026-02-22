import { Router } from "express";
import { productsRouters } from "./productsRoutes";
import { tablesRoutes } from "./tablesRoutes";

const routes = Router();

routes.use("/products", productsRouters);
routes.use("/tables", tablesRoutes);

export { routes };
