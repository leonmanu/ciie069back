import { Schema } from "mongoose";

 export const RolSchema = new Schema({
    clave: String,
    nombre: String,
    tipo: String,
    orden: Number,
    createAt: {
        type: Date,
        default: Date.now
    }
 })
