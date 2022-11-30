import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model } from "mongoose";
import { Attribute, AttributeDocument } from "../schemas/attribute.schema";


@Injectable()
export class AttributesRepository {
    constructor(@InjectModel(Attribute.name) private attributeModel: Model<AttributeDocument>) { }

    async findOne(attributeFilterQuery: FilterQuery<Attribute>): Promise<Attribute> {
        return this.attributeModel.findOne(attributeFilterQuery);
    }

    async find(attributesFilterQuery: FilterQuery<Attribute>): Promise<Attribute[]> {
        return this.attributeModel.find(attributesFilterQuery)
    }

    async create(attribute: Attribute): Promise<Attribute> {
        const newAttribute = new this.attributeModel(attribute);
        return newAttribute.save()
    }

    async findOneAndUpdate(attributeFilterQuery: FilterQuery<Attribute>, attribute: Partial<Attribute>): Promise<Attribute> {
        return this.attributeModel.findOneAndUpdate(attributeFilterQuery, attribute, { new: true });
    }
}