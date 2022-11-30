/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Patch, Param, Body } from '@nestjs/common';
import { CreateSweetness, UpdateSweetness } from '../dtos';
import { Sweetness } from '../schemas/sweetness.schema';
import { SweetnessService } from './sweetness.service';

@Controller('attribute/sweetnesses')
export class SweetnessController {
    constructor(private readonly sweetnessService: SweetnessService) { }

    @Get(':sweetnessId')
    async getSweetness(@Param('sweetnessId') sweetnessId: string): Promise<Sweetness> {
        console.log('get sweetness');

        return this.sweetnessService.getSweetnessById(sweetnessId);
    }

    @Get()
    async getSweetnesss(): Promise<Sweetness[]> {
        console.log('get sweetness');
        
        return this.sweetnessService.getSweetness();
    }

    @Post()
    async createSweetness(@Body() createSweetnessDto: CreateSweetness): Promise<Sweetness> {
        return this.sweetnessService.createSweetness(createSweetnessDto)
    }

    @Patch(':sweetnessId')
    async updateSweetness(@Param('sweetnessId') id: string, @Body() updateSweetnessDto: UpdateSweetness): Promise<Sweetness> {
        return this.sweetnessService.updateSweetness(id, updateSweetnessDto);
    }
}
