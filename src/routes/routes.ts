import { Router } from "express";
import userListController from "../controller/userList.controller";

const routes = Router();

routes.get("/users", userListController);

export default routes;
