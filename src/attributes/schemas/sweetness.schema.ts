import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type SweetnessDocument = Sweetness & Document;

@Schema()
export class Sweetness {
    
    @Prop()
    sweetLv: number;

    @Prop()
    sweetDesc: string;

    @Prop()
    isActive: boolean;

}

export const SweetnessSchema = SchemaFactory.createForClass(Sweetness);