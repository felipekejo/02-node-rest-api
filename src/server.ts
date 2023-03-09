import fastify from "fastify";
import { knex } from "./database";
const app = fastify();

app.get("hello", () => {
  const transaction = await knex("transactions").insert({
    id: crypto.randomUUID(),
    title: "Transacao test",
    amount: 1000,
  });
  return transaction;
});

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("HTTP server is running!!");
  });
