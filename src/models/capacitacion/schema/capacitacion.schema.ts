import { Schema } from "mongoose";

 export const CapacitacionSchema = new Schema({
    nombre: String,
    clave: String,
    area: String, //acá debería el id del área
    cursante: [],
    createAt: {
        type: Date,
        default: Date.now
    } 
 })
