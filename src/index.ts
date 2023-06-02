import * as express from "express"
import * as bodyParser from "body-parser"
import { Request, Response } from "express"
import { AppDataSource } from "./data-source"
import { cliente } from "./entity/cliente"
import cors = require("cors")
import helmet from "helmet"
import routes from "./routes"

const port = process.env.port || 3000;

AppDataSource.initialize().then(async () => {

    // create express app
    const app = express()
    app.use(cors()),
    app.use(helmet()),
    app.use(express.json()),
   
    app.use('/', routes);

    const Cliente = new cliente()
    Cliente.Cedula = 604870778;
    Cliente.Nombre = "Jocksan";
    Cliente.Apellido1 = "Vargas";
    Cliente.Apellido2 = "Rodriguez";
    Cliente.FechaNacimiento = "23-08-2004";
    Cliente.Genero = 'M';
    Cliente.Estado = true;
    await AppDataSource.manager.save(Cliente)

    const Cliente2 = new cliente()
    Cliente2.Cedula = 123456789;
    Cliente2.Nombre = "Joxini";
    Cliente2.Apellido1 = "Vargas";
    Cliente2.Apellido2 = "Real hasta la muerte";
    Cliente2.FechaNacimiento = "25-09-2005";
    Cliente2.Genero = 'M';
    Cliente2.Estado = true;
    await AppDataSource.manager.save(Cliente2)


    app.listen(port,()=>{console.log(`Servidor corriendo en puerto: ${port}`)});

}).catch(error => console.log(error))
