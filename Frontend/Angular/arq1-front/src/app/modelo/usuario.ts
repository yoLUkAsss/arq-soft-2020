export class Usuario{
    id:number;
    nombre:string; 
    email:string;
    telefono:string;
    cargo:string;
    localidad:string;
    entidad:string;

    constructor(id:number, nombre:string, email:string, telefono:string, cargo:string, localidad:string, entidad:string){
        this.id = id;
        this.nombre = nombre;
        this.email = email;
        this.telefono = telefono;
        this.cargo = cargo;
        this.localidad = localidad;
        this.entidad = entidad;
    }
}