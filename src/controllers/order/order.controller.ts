import {Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { OrderDto } from 'src/dto/order-dto';
import { IOrder } from 'src/interface/order';
import { OrderService } from 'src/services/order/order.service';

@Controller('order')
export class OrderController {
    
    constructor( private orderService: OrderService ) {
    }

    @Post()
    initTours(@Body() data: OrderDto): void {
        const orderData = new OrderDto(data.nameTicket, data.price, data.date,
            data.location, data.firstName, data.lastName, data.phone, data.eMail,
            data.birthDay, data.citizen,  data.tourId, data.userId, data.orderType);
        this.orderService.sendOrder(orderData);
    }

    @Get()
    getOrderAll(): Promise <IOrder[]> {
        return this.orderService.getOrderAll();
    }
    
    @Get(":userId")
    getOrderById(@Param ("userId") userId): Promise <IOrder[]> {
        return this.orderService.getOrderById(userId);
    }

    @Delete(":_id")
    deleteOrderById(@Param('_id') _id): Promise<IOrder> {
        return this.orderService.deleteOrderById(_id);
    }

    @Put(":_id")
    updateOrderById(@Param('_id') _id, @Body() data ) : Promise<IOrder> {
        return this.orderService.updateOrderById(_id, data);
    }

}


