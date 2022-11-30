import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document, } from 'mongoose';
import { Option } from "./option.schema";
import { Sweetness } from "./sweetness.schema";
import { Type } from "./type.schema";

export type AttributeDocument = Attribute & Document;

@Schema()
export class Attribute {
    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Type' }] })
    typesId: Type[];

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Sweetness' }] })
    sweetnessId: Sweetness[];

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Option' }] })
    optionId: Option[];
}

export const AttributeSchema = SchemaFactory.createForClass(Attribute);