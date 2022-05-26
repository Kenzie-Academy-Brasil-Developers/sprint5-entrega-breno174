import { Router } from "express";
import getUserOr404Middleware from "../middlewares/getUserOr404.middleware";
import userAlreadyExistMiddleware from "../middlewares/userAlreadyExist.middleware";
import {
  userListController,
  userCreateController,
  userLoginController,
  userupdateController,
  userFoundOneController,
  userDeleteController,
} from "../controller";

const routes = Router();

routes.get("/users", userListController);
routes.post("/users", userAlreadyExistMiddleware, userCreateController);
routes.post("/users/login", userLoginController);
routes.get("/users/<id>", getUserOr404Middleware, userFoundOneController);
routes.patch("/users/<id>", getUserOr404Middleware, userupdateController);
routes.delete("/users/<id>", getUserOr404Middleware, userDeleteController);

export default routes;
