import { Schema } from "mongoose";

 export const DesignacionSchema = new Schema({
    cargo: {type: Schema.Types.ObjectId, ref: 'cargo'},
    docente: {type: Schema.Types.ObjectId, ref: 'docente'},
    desde: Date,
    hasta: Date,
    institucion: {type: Schema.Types.ObjectId, ref: 'institucion'},
    createAt: {
        type: Date,
        default: Date.now
    }
 })
