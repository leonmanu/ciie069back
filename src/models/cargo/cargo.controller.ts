import { Controller, HttpStatus, Post, Res, Body, Get, Delete, Param, Put } from '@nestjs/common';
import { CargoService } from './cargo.service';
import { CargoDTO } from './dto/cargo.dto';

@Controller('cargo')
export class CargoController {

    constructor( private cargoService: CargoService ){}

    @Post()
    async create(@Res() res, @Body() cargoDTO: CargoDTO) {
        const cargo = await this.cargoService.create(cargoDTO);
        return res.status(HttpStatus.CREATED).json({
            message: 'Cargo creado exitosamente',
            cargoCreado: cargo
        });
    }

    @Get()
    async findAll() {
        const cargos = await this.cargoService.findAll();
        return cargos;
    }

    @Get('id/:id')
    async findOneId(@Res() res, @Param('id') id: string) {
        const cargo = await this.cargoService.findOneId(id);
        console.log("cargoBack: "+cargo)
        if (!cargo) {
            return res.status(HttpStatus.NOT_FOUND).json({
                message: 'Cargo no encontrado',
            });
        }
        return res.status(HttpStatus.OK).json({
            message: 'Cargo encontrado exitosamente',
            cargoEncontrado: cargo,
        });
    }

    @Get(':clave')
    async findOneClave(@Res() res, @Param('clave') clave: string) {
        const cargo = await this.cargoService.findOneClave(clave);
        console.log("cargoBack: "+cargo)
        if (!cargo) {
            return res.status(HttpStatus.NOT_FOUND).json({
                message: 'Cargo no encontrado',
            });
        }
        return res.status(HttpStatus.OK).json({
            message: 'Cargo encontrado exitosamente',
            cargoEncontrado: cargo,
        });
    }

    @Delete(':id')
    async remove(@Res() res, @Param('id') id: string) {
        await this.cargoService.delete(id);
        return res.status(HttpStatus.OK).json({
            message: 'Cargo eliminado exitosamente',
        });
    }

    @Put(':id')
    async update(@Res() res, @Param('id') id: string, @Body() cargoDTO: CargoDTO) {
        const cargo = await this.cargoService.update(id, cargoDTO);
        if (!cargo) {
            return res.status(HttpStatus.NOT_FOUND).json({
                message: 'Cargo no encontrado',
            });
        }
        return res.status(HttpStatus.OK).json({
            message: 'Cargo actualizado exitosamente',
            cargoActualizado: cargo,
        });
    }
}
