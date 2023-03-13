import { Document } from "mongoose"

export interface DesignacionInterface extends Document {
    readonly cargo: string
    readonly docente: string
    readonly desde: Date
    readonly hasta: Date
    readonly revista: string
}