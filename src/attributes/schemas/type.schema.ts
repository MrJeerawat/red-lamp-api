import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type TypeDocument = Type & Document;

@Schema()
export class Type {
    
    @Prop()
    type: string;

    @Prop()
    plusPrice: number;

    @Prop()
    plusDuration: number;

    @Prop()
    isActive: boolean;

}

export const TypeSchema = SchemaFactory.createForClass(Type);