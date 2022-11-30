import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type OptionDocument = Option & Document;

@Schema()
export class Option {
    @Prop()
    option: string;

    @Prop()
    isActive: boolean;

}

export const OptionSchema = SchemaFactory.createForClass(Option);