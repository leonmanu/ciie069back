import { CargoService } from './cargo.service';
import { CargoDTO } from './dto/cargo.dto';
export declare class CargoController {
    private cargoService;
    constructor(cargoService: CargoService);
    create(res: any, cargoDTO: CargoDTO): Promise<any>;
    findAll(): Promise<import("./interface/cargo.interface").CargoInterface[]>;
    findOneId(res: any, id: string): Promise<any>;
    findOneClave(res: any, clave: string): Promise<any>;
    remove(res: any, id: string): Promise<any>;
    update(res: any, id: string, cargoDTO: CargoDTO): Promise<any>;
}
