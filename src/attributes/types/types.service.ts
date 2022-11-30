import { Injectable } from '@nestjs/common';
import { CreateType, UpdateType } from '../dtos';
import { TypesRepository } from '../repository';
import { Type } from '../schemas/type.schema';

@Injectable()
export class TypesService {
    constructor(private readonly typesRepository: TypesRepository) { }

    async getTypeById(id: string): Promise<Type> {
        return this.typesRepository.findOne({ id })
    }

    async getTypes(): Promise<Type[]> {
        return this.typesRepository.find({});
    }

    async createType(body: CreateType): Promise<Type> {
        return this.typesRepository.create(body)
    }

    async updateType(id: string, typeUpdates: UpdateType): Promise<Type> {
        return this.typesRepository.findOneAndUpdate({ id }, typeUpdates);
    }
}
