import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { OrderDto } from 'src/dto/order-dto';
import { IOrder } from 'src/interface/order';
import {Order, OrderDocument } from 'src/schemas/order';

@Injectable()
export class OrderService {

    constructor(@InjectModel(Order.name) private orderModel: Model<OrderDocument>) {}


    async  sendOrder( data:OrderDto): Promise<Order>{
        const orderData = new this.orderModel(data);
        return orderData.save();
    }

   async getOrderAll(): Promise<IOrder[]>{
       return this.orderModel.find();
   }
   
   async getOrderById(userId: string): Promise<IOrder[]>{
       return this.orderModel.find({"userId": userId});
   }

   async deleteOrderById(_id: string): Promise<IOrder> {
       return this.orderModel.findByIdAndRemove({"_id": _id});
   }
   async updateOrderById(_id: string, body):  Promise<IOrder> {
       return this.orderModel.findByIdAndUpdate(_id, body);
   }
   
   
}
