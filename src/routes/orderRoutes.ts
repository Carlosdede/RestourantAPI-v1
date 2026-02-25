import { Router } from "express";
import { OrdersController } from "@/controllers/ordersController";

const orderRoutes = Router();
const orderController = new OrdersController();

orderRoutes.get("/table-session/:table_session_id", orderController.index);
orderRoutes.get("/table-session/:table_session_id/total", orderController.show);
orderRoutes.post("/", orderController.create);
orderRoutes.patch("/", orderController.update);
orderRoutes.delete("/", orderController.remove);

export { orderRoutes };
