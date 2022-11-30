import { Controller, Get, Post, Patch, Param, Body } from '@nestjs/common';
import { CreateType, UpdateType } from '../dtos';
import { Type } from '../schemas/type.schema';
import { TypesService } from './types.service';

@Controller('attribute/types')
export class TypesController {
    constructor(private readonly typeService: TypesService) { }

    @Get(':typeId')
    async getType(@Param('typeId') typeId: string): Promise<Type> {
        return this.typeService.getTypeById(typeId);
    }

    @Get()
    async getTypes(): Promise<Type[]> {
        return this.typeService.getTypes();
    }

    @Post()
    async createType(@Body() createTypeDto: CreateType): Promise<Type> {
        return this.typeService.createType(createTypeDto)
    }

    @Patch(':typeId')
    async updateType(@Param('typeId') id: string, @Body() updateTypeDto: UpdateType): Promise<Type> {
        return this.typeService.updateType(id, updateTypeDto);
    }
}
