import { Controller, HttpStatus, Post, Res, Body } from '@nestjs/common';
import { CapacitacionService } from './capacitacion.service';
import { CapacitacionDTO } from './dto/capacitacion.dto';
//import { CreateProductDTO } from './dto/capacitacion.dto';

@Controller('capacitacion')
export class CapacitacionController {

    constructor(private capacitacionService: CapacitacionService){}

    @Post('/crear')
    async post(@Res() res, @Body() capacitacionDTO: CapacitacionDTO){
        console.log(capacitacionDTO);
        const capacitacion = await this.capacitacionService.post(capacitacionDTO)
        return res.status(HttpStatus.OK).json({
            message: 'recived',
            capacitacion: capacitacion
        })
    }
}
