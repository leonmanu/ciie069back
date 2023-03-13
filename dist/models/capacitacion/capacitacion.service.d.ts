import { Model } from "mongoose";
import { CapacitacionInterface } from './interface/capacitacion.interface';
import { CapacitacionDTO } from './dto/capacitacion.dto';
export declare class CapacitacionService {
    private readonly capacitacionModel;
    constructor(capacitacionModel: Model<CapacitacionInterface>);
    getTodo(): Promise<CapacitacionInterface[]>;
    getPorId(capacitacionId: string): Promise<CapacitacionInterface>;
    post(capacitacionDTO: CapacitacionDTO): Promise<CapacitacionInterface>;
}
