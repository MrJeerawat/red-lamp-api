import { Injectable } from '@nestjs/common';
import { CreateSweetness, UpdateSweetness } from '../dtos';
import { SweetnessRepository } from '../repository';
import { Sweetness } from '../schemas/sweetness.schema';

@Injectable()
export class SweetnessService {
    constructor(private readonly sweetnessRepository: SweetnessRepository) { }

    async getSweetnessById(id: string): Promise<Sweetness> {
        return this.sweetnessRepository.findOne({ id })
    }

    async getSweetness(): Promise<Sweetness[]> {
        return this.sweetnessRepository.find({});
    }

    async createSweetness(body: CreateSweetness): Promise<Sweetness> {
        return this.sweetnessRepository.create(body)
    }

    async updateSweetness(id: string, sweetnessUpdates: UpdateSweetness): Promise<Sweetness> {
        return this.sweetnessRepository.findOneAndUpdate({ id }, sweetnessUpdates);
    }
}
