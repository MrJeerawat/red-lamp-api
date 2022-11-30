import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model } from "mongoose";
import { Type, TypeDocument } from "../schemas/type.schema";


@Injectable()
export class TypesRepository {
    constructor(@InjectModel(Type.name) private typeModel: Model<TypeDocument>) { }

    async findOne(typeFilterQuery: FilterQuery<Type>): Promise<Type> {
        return this.typeModel.findOne(typeFilterQuery);
    }

    async find(typesFilterQuery: FilterQuery<Type>): Promise<Type[]> {
        return this.typeModel.find(typesFilterQuery)
    }

    async create(type: Type): Promise<Type> {
        const newType = new this.typeModel(type);
        return newType.save()
    }

    async findOneAndUpdate(typeFilterQuery: FilterQuery<Type>, type: Partial<Type>): Promise<Type> {
        return this.typeModel.findOneAndUpdate(typeFilterQuery, type, { new: true });
    }
}