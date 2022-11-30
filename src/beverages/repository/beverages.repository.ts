import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model } from "mongoose";
import { Beverage, BeverageDocument } from 'src/beverages/schemas/beverage.schema';


@Injectable()
export class BeveragesRepository {
    constructor(@InjectModel(Beverage.name) private typeModel: Model<BeverageDocument>) { }

    async findOne(beverageFilterQuery: FilterQuery<Beverage>): Promise<Beverage> {
        return this.typeModel.findOne(beverageFilterQuery);
    }

    async find(beveragesFilterQuery: FilterQuery<Beverage>): Promise<Beverage[]> {
        return this.typeModel.find(beveragesFilterQuery)
    }

    async create(option: Beverage): Promise<Beverage> {
        const newBeverage = new this.typeModel(option);
        return newBeverage.save()
    }

    async findOneAndUpdate(beverageFilterQuery: FilterQuery<Beverage>, beverage: Partial<Beverage>): Promise<Beverage> {
        return this.typeModel.findOneAndUpdate(beverageFilterQuery, beverage, { new: true });
    }
}