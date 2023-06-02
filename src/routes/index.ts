import { Router } from "express";
import cliente from "./clientes";


const routes = Router();

routes.use('/clientes', cliente);



export default routes;