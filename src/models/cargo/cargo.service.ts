import { Injectable } from '@nestjs/common';
import { Model } from "mongoose";
import { InjectModel } from '@nestjs/mongoose';
import { CargoInterface } from './interface/cargo.interface';
import { CargoDTO } from './dto/cargo.dto';

@Injectable()
export class CargoService {

    constructor( @InjectModel('Cargo') private readonly cargoModel: Model<CargoInterface>  ){}

    async post(cargoDTO: CargoDTO): Promise<CargoInterface>  {
        const cargo = new this.cargoModel(cargoDTO)
        await cargo.save()
        return cargo
    }

    async get(): Promise<CargoInterface[]>  {
        const cargos = await this.cargoModel.find()
        return cargos
    }
}
