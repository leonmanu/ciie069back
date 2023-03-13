import { Model } from "mongoose";
import { CargoInterface } from './interface/cargo.interface';
import { CargoDTO } from './dto/cargo.dto';
export declare class CargoService {
    private readonly cargoModel;
    constructor(cargoModel: Model<CargoInterface>);
    post(cargoDTO: CargoDTO): Promise<CargoInterface>;
}
