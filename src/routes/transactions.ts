import { FastifyInstance } from "fastify";
import crypto from "node:crypto";
import { knex } from "../database";

export async function transactionsRoutes(app: FastifyInstance) {
  app.get("hello", async () => {
    const transaction = await knex("transactions").insert({
      id: crypto.randomUUID(),
      title: "Transacao test",
      amount: 1000,
    });
    return transaction;
  });
}
