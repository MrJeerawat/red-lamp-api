import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model } from "mongoose";
import { Sweetness, SweetnessDocument } from "../schemas/sweetness.schema";


@Injectable()
export class SweetnessRepository {
    constructor(@InjectModel(Sweetness.name) private sweetnessModel: Model<SweetnessDocument>) { }

    async findOne(sweetnessFilterQuery: FilterQuery<Sweetness>): Promise<Sweetness> {
        return this.sweetnessModel.findOne(sweetnessFilterQuery);
    }

    async find(sweetnessFilterQuery: FilterQuery<Sweetness>): Promise<Sweetness[]> {
        return this.sweetnessModel.find(sweetnessFilterQuery)
    }

    async create(sweetness: Sweetness): Promise<Sweetness> {
        const newSweetness = new this.sweetnessModel(sweetness);
        return newSweetness.save()
    }

    async findOneAndUpdate(sweetnessFilterQuery: FilterQuery<Sweetness>, sweetness: Partial<Sweetness>): Promise<Sweetness> {
        return this.sweetnessModel.findOneAndUpdate(sweetnessFilterQuery, sweetness, { new: true });
    }
}