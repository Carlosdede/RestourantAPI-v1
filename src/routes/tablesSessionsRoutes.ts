import { TablesSessions } from "@/controllers/tablesSessionsController";
import { Router } from "express";

const tablesSessionsRouter = Router();
const tableSessionsController = new TablesSessions();

tablesSessionsRouter.get("/", tableSessionsController.index);
tablesSessionsRouter.post("/", tableSessionsController.create);
tablesSessionsRouter.patch("/:id", tableSessionsController.update);

export { tablesSessionsRouter };
