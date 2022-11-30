import { Controller, Get, Post, Patch, Param, Body } from '@nestjs/common';
import { AttributesService } from './attributes.service';
import { CreateAttribute, UpdateAttribute } from './dtos';
import { Attribute } from './schemas/attribute.schema';

@Controller('attributes')
export class AttributesController {
    constructor(private readonly attributeService: AttributesService) { }

    @Get(':AttributeId')
    async getAttribute(@Param('AttributeId') AttributeId: string): Promise<Attribute> {
        return this.attributeService.getAttributeById(AttributeId);
    }

    @Get()
    async getAttributes(): Promise<Attribute[]> {
        return this.attributeService.getAttributes();
    }

    @Post()
    async createAttribute(@Body() createAttributeDto: CreateAttribute): Promise<Attribute> {
        console.log('body',createAttributeDto);
        return this.attributeService.createAttribute(createAttributeDto)
    }

    @Patch(':AttributeId')
    async updateAttribute(@Param('AttributeId') id: string, @Body() updateAttributeDto: UpdateAttribute): Promise<Attribute> {
        return this.attributeService.updateAttribute(id, updateAttributeDto);
    }
}
