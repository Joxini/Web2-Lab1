import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class cliente{
    @PrimaryColumn()
    Cedula:number;
    @Column()
    Nombre:string;
    @Column()
    Apellido1:string;
    @Column()
    Apellido2:string;
    @Column()
    FechaNacimiento:String;
    @Column()
    Genero:string;
    @Column()
    Estado:boolean;

}