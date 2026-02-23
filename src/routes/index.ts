import { Router } from "express";
import { productsRouters } from "./productsRoutes";
import { tablesRoutes } from "./tablesRoutes";
import { tablesSessionsRouter } from "./tablesSessionsRoutes";
import { orderRoutes } from "./orderRoutes";

const routes = Router();

routes.use("/products", productsRouters);
routes.use("/tables", tablesRoutes);
routes.use("/sessions", tablesSessionsRouter);
routes.use("/orders", orderRoutes);

export { routes };
