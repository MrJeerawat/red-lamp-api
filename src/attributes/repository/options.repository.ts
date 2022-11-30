import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model } from "mongoose";
import { Option, OptionDocument } from "../schemas/option.schema";

@Injectable()
export class OptionsRepository {
    constructor(@InjectModel(Option.name) private typeModel: Model<OptionDocument>) { }

    async findOne(optionFilterQuery: FilterQuery<Option>): Promise<Option> {
        return this.typeModel.findOne(optionFilterQuery);
    }

    async find(optionsFilterQuery: FilterQuery<Option>): Promise<Option[]> {
        return this.typeModel.find(optionsFilterQuery)
    }

    async create(option: Option): Promise<Option> {
        const newOption = new this.typeModel(option);
        return newOption.save()
    }

    async findOneAndUpdate(optionFilterQuery: FilterQuery<Option>, option: Partial<Option>): Promise<Option> {
        return this.typeModel.findOneAndUpdate(optionFilterQuery, option, { new: true });
    }
}

