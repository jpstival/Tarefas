import { Sequelize } from "sequelize-typescript"

export const sequelize = new Sequelize({
  username: "postgres",
  password: "postgres",
  database: "tarefas",
  host: "127.0.0.1",
  dialect: "postgres",
})
