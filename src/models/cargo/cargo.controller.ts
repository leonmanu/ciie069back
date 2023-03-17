import { Controller, HttpStatus, Post, Res, Body, Get } from '@nestjs/common';
import { CargoService } from './cargo.service';
import { CargoDTO } from './dto/cargo.dto';

@Controller('cargo')
export class CargoController {

    constructor( private cargoService: CargoService ){}

    @Post('/crear')
    async post(@Res() res, @Body() cargoDTO: CargoDTO){
        console.log(cargoDTO);
        const cargo = await this.cargoService.post(cargoDTO)
        return res.status(HttpStatus.OK).json({
            message: 'recived',
            cargoCreado: cargo
        })
    }

    @Get('/todos')
    async get(@Res() res){
        const cargo = await this.cargoService.get()
        console.log(cargo);
        return res.status(HttpStatus.OK).json({
            message: 'recived',
            cargoCreado: cargo
        })
    }

}
