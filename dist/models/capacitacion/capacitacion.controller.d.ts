import { CapacitacionService } from './capacitacion.service';
import { CapacitacionDTO } from './dto/capacitacion.dto';
export declare class CapacitacionController {
    private capacitacionService;
    constructor(capacitacionService: CapacitacionService);
    post(res: any, capacitacionDTO: CapacitacionDTO): Promise<any>;
}
