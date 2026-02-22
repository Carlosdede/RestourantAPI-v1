import { Request, Response, NextFunction } from "express";
import { knex } from "@/database/knex";
import { z } from "zod";

class TablesController {
  async index(request: Request, response: Response, next: NextFunction) {
    try {
      const tables = await knex<TableRepository>("tables")
        .select()
        .orderBy("table_number");

      return response.json(tables);
    } catch (error) {
      next(error);
    }
  }
  async create() {}
  async update() {}
  async remove() {}
}

export { TablesController };
