import { Router } from "express";
import UserController from "./controllers/UserController";

const userController = new UserController;

const routes = Router();

routes.get('/users', userController.index)
routes.post('/users', userController.sendMail)

export default routes;