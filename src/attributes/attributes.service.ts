import { Injectable } from '@nestjs/common';
import { CreateAttribute, UpdateAttribute } from './dtos';
import { AttributesRepository } from './repository';
import { Attribute } from './schemas/attribute.schema';

@Injectable()
export class AttributesService {
    constructor(private readonly attributeRepository: AttributesRepository) { }

    async getAttributeById(id: string): Promise<Attribute> {
        return this.attributeRepository.findOne({ id })
    }

    async getAttributes(): Promise<Attribute[]> {
        return this.attributeRepository.find({});
    }

    async createAttribute(body: CreateAttribute): Promise<Attribute> {
        return this.attributeRepository.create(body)
    }

    async updateAttribute(id: string, attributeUpdates: UpdateAttribute): Promise<Attribute> {
        return this.attributeRepository.findOneAndUpdate({ id }, attributeUpdates);
    }
}
