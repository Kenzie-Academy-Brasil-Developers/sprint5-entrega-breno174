import "reflect-metadata";
import { DataSource } from "typeorm";
import * as dotenv from "dotenv";
import path from "path";
import app from "./index";
dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,

  username: process.env.POSTGRESS_USER,
  password: process.env.POSTGRESS_PWD,
  database: process.env.POSTGRESS_DB,

  logging: false,
  entities: [path.join(__dirname, "./entities/**/*.{js,ts}")],
  migrations: [path.join(__dirname, "./migrations/**/*.{js,ts}")],
});

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected!");
    const port = process.env.PORT ?? 3000;

    app.listen(port, () => {
      console.log(`App running on http://localhost:${port}/`);
    });
  })
  .catch((err) => console.error(err));
