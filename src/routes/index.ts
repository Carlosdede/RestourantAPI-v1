import { Router } from "express";
import { productsRouters } from "./productsRoutes";
import { tablesRoutes } from "./tablesRoutes";
import { tablesSessionsRouter } from "./tablesSessionsRoutes";

const routes = Router();

routes.use("/products", productsRouters);
routes.use("/tables", tablesRoutes);
routes.use("/sessions", tablesSessionsRouter);

export { routes };
