import { Model } from "mongoose";
import { CargoInterface } from './interface/cargo.interface';
import { CargoDTO } from './dto/cargo.dto';
export declare class CargoService {
    private readonly cargoModel;
    constructor(cargoModel: Model<CargoInterface>);
    create(cargoDTO: CargoDTO): Promise<CargoInterface>;
    findAll(): Promise<CargoInterface[]>;
    findOneId(id: string): Promise<CargoInterface | null>;
    findOneClave(clave: string): Promise<CargoInterface | null>;
    delete(id: string): Promise<void>;
    update(id: string, cargoDTO: CargoDTO): Promise<CargoInterface | null>;
}
