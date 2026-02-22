import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("products").del();

  // Inserts seed entries
  await knex("products").insert([
    // Entradas
    { name: "Bruschetta Italiana", price: 22 },
    { name: "Carpaccio di Manzo", price: 34 },
    { name: "Arancini de Risotto", price: 28 },

    // Massas
    { name: "Spaghetti alla Carbonara", price: 42 },
    { name: "Fettuccine Alfredo", price: 39 },
    { name: "Lasagna alla Bolognese", price: 45 },
    { name: "Penne ao Pesto", price: 36 },
    { name: "Ravioli di Ricotta e Spinaci", price: 41 },

    // Pizzas
    { name: "Pizza Margherita", price: 48 },
    { name: "Pizza Pepperoni", price: 52 },
    { name: "Pizza Quattro Formaggi", price: 54 },

    // Sobremesas
    { name: "Tiramisu", price: 24 },
    { name: "Panna Cotta", price: 23 },
    { name: "Cannoli Siciliano", price: 26 },

    // Bebidas
    { name: "Água Mineral", price: 6 },
    { name: "Refrigerante", price: 8 },
    { name: "Suco Natural", price: 10 },
    { name: "Vinho Tinto da Casa", price: 18 },
  ]);
}
