import { Document } from "mongoose";
export interface CapacitacionInterface extends Document {
    readonly nombre: string;
    readonly area: string;
    readonly cursante: [];
}
