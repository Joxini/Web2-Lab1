import "reflect-metadata"
import { DataSource } from "typeorm"
import { cliente } from "./entity/cliente"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3307,
    username: "root",
    password: "root",
    database: "lab1",
    synchronize: true,
    logging: false,
    entities: [cliente],
    migrations: [],
    subscribers: [],
})
