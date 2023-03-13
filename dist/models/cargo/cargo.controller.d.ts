import { CargoService } from './cargo.service';
import { CargoDTO } from './dto/cargo.dto';
export declare class CargoController {
    private cargoService;
    constructor(cargoService: CargoService);
    post(res: any, cargoDTO: CargoDTO): Promise<any>;
}
