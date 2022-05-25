import { Router } from "express";
import userListController from "../controller/userList.controller";
import userCreateController from "../controller/userCreate.controller";
import userAlreadyExistMiddleware from "../middlewares/userAlreadyExist.middleware";

const routes = Router();

routes.get("/users", userListController);
routes.post("/users", userAlreadyExistMiddleware, userCreateController);

export default routes;
