import { Request,Response } from "express"
import { AppDataSource } from "../data-source"
import { cliente } from "../entity/cliente"

export class ClienteController{
    static getAll = async(req:Request, resp:Response) => {

        const userRepository = AppDataSource.getRepository(cliente)
        let usuario;
        try{
            usuario = await userRepository.find()
        }catch(error){
            resp.status(500).json({
                message: "Error al crear al usuario",
                error: error.message
            })
        }
        
        if(usuario.length > 0){
            return resp.send(usuario)
        }else{
            return resp.status(404).json({
                message: "No se encuentra en la base de datos"
            })
        }
    }

    static getById = async(req:Request, resp:Response) => {

        const {Cedula} = req.params
        const userRepository = AppDataSource.getRepository(cliente)
        
        try{
            const usuariosID = await userRepository.findOneByOrFail({Cedula:parseInt(Cedula)})
            resp.send(usuariosID)
        }catch(error){
            resp.status(500).json({
                message: "No se encuentra en la base de datos",
                error: error.message
            })
        }
    }
    static add= async(req:Request, resp:Response) => {

        

        return resp.status(200).json({mensaje:`Good`})
    }
    static update = async(req:Request, resp:Response) => {

        return resp.status(200).json({mensaje:`Good`})
    }
    static delete = async(req:Request, resp:Response) => {

        return resp.status(200).json({mensaje:`Good`})
    }
}

export default ClienteController;