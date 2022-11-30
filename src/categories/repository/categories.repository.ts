import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model } from "mongoose";
import { Category, CategoryDocument } from "../schemas/category.schema";

@Injectable()
export class CategoriesRepository {
    constructor(@InjectModel(Category.name) private typeModel: Model<CategoryDocument>) { }

    async findOne(attributeFilterQuery: FilterQuery<Category>): Promise<Category> {
        return this.typeModel.findOne(attributeFilterQuery);
    }

    async find(attributesFilterQuery: FilterQuery<Category>): Promise<Category[]> {
        return this.typeModel.find(attributesFilterQuery)
    }
}