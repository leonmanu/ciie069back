import { Schema } from "mongoose";

 export const CargoSchema = new Schema({
    cupof: String,
    clave: String,
    rol: {type: Schema.Types.ObjectId, ref: 'rol'},
    area: {type: Schema.Types.ObjectId, ref: 'area'},
    cargaHoraria: Number,
    institucion: {type: Schema.Types.ObjectId, ref: 'institucion'},
    designacion: [{type: Schema.Types.ObjectId, ref: 'designacion'}],
    createAt: {
        type: Date,
        default: Date.now
    }
 })
