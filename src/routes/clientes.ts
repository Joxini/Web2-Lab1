import { Router } from "express";
import { ClienteController } from "../controller/ClienteController";


const routes = Router();

routes.get('', ClienteController.getAll);
routes.get('/:Cedula', ClienteController.getById);
routes.post('', ClienteController.add);


export default routes;