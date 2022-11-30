import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type BeverageDocument = Beverage & Document;

@Schema()
export class Beverage {
    
    @Prop()
    bevName: string;

    @Prop()
    price: number;

    @Prop()
    unitPrice: string;

    @Prop()
    duration: number; 

    @Prop()
    unitDuration: string;

}

export const BeverageSchema = SchemaFactory.createForClass(Beverage);