import { Injectable } from '@nestjs/common';
import { Model } from "mongoose";
import { InjectModel } from '@nestjs/mongoose';
import { CargoInterface } from './interface/cargo.interface';
import { CargoDTO } from './dto/cargo.dto';

@Injectable()
export class CargoService {

    constructor( @InjectModel('Cargo') private readonly cargoModel: Model<CargoInterface>  ){}

    async create(cargoDTO: CargoDTO): Promise<CargoInterface> {
        const cargo = new this.cargoModel(cargoDTO);
        await cargo.save();
        return cargo;
    }

    async findAll(): Promise<CargoInterface[]> {
        const cargos = await this.cargoModel.find();
        return cargos;
    }

    async findOneId(id: string): Promise<CargoInterface | null> {
        const cargo = await this.cargoModel.findById(id);
        return cargo;
    }

    async findOneClave(clave: string): Promise<CargoInterface | null> {
        const cargo = await this.cargoModel.findOne({clave: clave});
        return cargo;
    }

    async delete(id: string): Promise<void> {
        await this.cargoModel.findByIdAndDelete(id);
    }

    async update(id: string, cargoDTO: CargoDTO): Promise<CargoInterface | null> {
        const cargo = await this.cargoModel.findByIdAndUpdate(id, cargoDTO, { new: true });
        return cargo;
    }
}
