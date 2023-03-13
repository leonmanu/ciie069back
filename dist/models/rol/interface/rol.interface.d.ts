import { Document } from "mongoose";
export interface RolInterface extends Document {
    readonly clave: string;
    readonly nombre: string;
    readonly tipo: string;
    readonly orden: number;
}
