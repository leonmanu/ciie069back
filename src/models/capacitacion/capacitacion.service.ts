import { Injectable } from '@nestjs/common';
import { Model } from "mongoose";
import { InjectModel } from '@nestjs/mongoose';

import { CapacitacionInterface } from './interface/capacitacion.interface';
import { CapacitacionDTO } from './dto/capacitacion.dto';

@Injectable()
export class CapacitacionService {
    
    constructor(@InjectModel('Capacitacion') private readonly capacitacionModel: Model<CapacitacionInterface>){}

    async getTodo(): Promise<CapacitacionInterface[]>  {
        const capacitacion = await this.capacitacionModel.find()
        return capacitacion
    }

    async getPorId(capacitacionId: string): Promise<CapacitacionInterface>  {
        const capacitacion = await this.capacitacionModel.findById(capacitacionId)
        return capacitacion
    }

    async post(capacitacionDTO: CapacitacionDTO): Promise<CapacitacionInterface>  {
        const capacitacion = new this.capacitacionModel(capacitacionDTO)
        await capacitacion.save()
        return capacitacion
    }

}
