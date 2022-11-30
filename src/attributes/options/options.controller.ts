import { Controller, Get, Param, Body, Post, Patch } from '@nestjs/common';
import { CreateOption, UpdateOption } from '../dtos';
import { Option } from '../schemas/option.schema';
import { OptionsService } from './options.service';

@Controller('attribute/options')
export class OptionsController {
    constructor(private readonly optionService: OptionsService) { }

    @Get(':optionId')
    async getOption(@Param('optionId') optionId: string): Promise<Option> {
        return this.optionService.getOptionById(optionId);
    }

    @Get()
    async getOptions(): Promise<Option[]> {
        return this.optionService.getOptions();
    }

    @Post()
    async createOption(@Body() createOptionDto: CreateOption): Promise<Option> {
        return this.optionService.createOption(createOptionDto)
    }

    @Patch(':optionId')
    async updateOption(@Param('optionId') id: string, @Body() updateOptionDto: UpdateOption): Promise<Option> {
        return this.optionService.updateOption(id, updateOptionDto);
    }
}
