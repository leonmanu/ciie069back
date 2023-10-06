import { Document } from "mongoose"

export interface CargoInterface extends Document {
    readonly cupof: string 
    readonly clave: string //es un pseudo ID
    readonly rol: string
    readonly area: string
    readonly cargaHoraria: number
    readonly institucion: string
    readonly designacion?: [string]
}