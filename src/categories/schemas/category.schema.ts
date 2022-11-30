import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from 'mongoose';
import { Attribute } from "src/attributes/schemas/attribute.schema";
import { Beverage } from "src/beverages/schemas/beverage.schema";

export type CategoryDocument = Category & Document;

@Schema()
export class Category {
    @Prop()
    catName: string;

    @Prop()
    isActive: boolean;

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Beverage' }] })
    beverages:Beverage[];

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Attribute' })
    attributes:Attribute;

}

export const CategorySchema = SchemaFactory.createForClass(Category);