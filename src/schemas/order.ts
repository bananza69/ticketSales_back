import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import {IOrder} from "../interface/order";

export type OrderDocument = HydratedDocument<Order>;

@Schema()
export class Order implements IOrder{
    @Prop() nameTicket: string;
    @Prop() price: number;
    @Prop() date: string;
    @Prop() location: string;
    @Prop() firstName:string ;
    @Prop() lastName:string ;
    @Prop() phone:number ;
    @Prop() eMail:string ;
    @Prop() birthDay:string;
    @Prop() citizen:string;
    @Prop() tourId:string;
    @Prop() userId:string;
    @Prop() orderType: string;
    
}

export const OrderSchema = SchemaFactory.createForClass(Order);

