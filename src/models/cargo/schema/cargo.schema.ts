import { Schema } from "mongoose";

 export const CargoSchema = new Schema({
    cupof: String,
    clave: {type: String, required: true, unique: true},
    rol: {type: Schema.Types.ObjectId, ref: 'rol'},
    area: {type: Schema.Types.ObjectId, ref: 'area'},
    cargaHoraria: Number,
    institucion: {type: Schema.Types.ObjectId, ref: 'institucion'},
    designacion: [String], //[{type: Schema.Types.ObjectId, ref: 'designacion'}],
    createAt: {
        type: Date,
        default: Date.now
    }
 })
