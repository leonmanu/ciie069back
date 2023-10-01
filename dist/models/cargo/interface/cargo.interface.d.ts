import { Document } from "mongoose";
export interface CargoInterface extends Document {
    readonly cupof: string;
    readonly clave: string;
    readonly rol: string;
    readonly area: string;
    readonly cargaHoraria: number;
    readonly institucion: string;
    readonly designacion?: [string];
}
