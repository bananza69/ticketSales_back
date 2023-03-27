import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import {ITour} from "../interface/tour";

export type TourDocument = HydratedDocument<Tour>;

@Schema()
export class Tour implements ITour{
    
    @Prop() name:string ;
    @Prop() location:string ;
    @Prop() description:string;
    @Prop() tourOperator:string;
    @Prop() price:number;
    @Prop() date: string
    @Prop() img:string;
    @Prop() type: string;
    @Prop() id:string;

}

export const TourSchema = SchemaFactory.createForClass(Tour);