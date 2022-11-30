import { Injectable } from '@nestjs/common';
import { CreateOption, UpdateOption } from '../dtos';
import { OptionsRepository } from '../repository';
import { Option } from '../schemas/option.schema';


@Injectable()
export class OptionsService {
    constructor(private readonly optionsRepository: OptionsRepository) { }

    async getOptionById(id: string): Promise<Option> {
        return this.optionsRepository.findOne({ id })
    }

    async getOptions(): Promise<Option[]> {
        return this.optionsRepository.find({});
    }

    async createOption(body: CreateOption): Promise<Option> {
        return this.optionsRepository.create(body)
    }

    async updateOption(id: string, optionUpdates: UpdateOption): Promise<Option> {
        return this.optionsRepository.findOneAndUpdate({ id }, optionUpdates);
    }
}
