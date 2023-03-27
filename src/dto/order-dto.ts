import { IOrder } from "src/interface/order";

export class OrderDto implements IOrder{
    nameTicket: string;
    price: number;
    date: string;
    location: string;
    firstName: string;
    lastName: string;
    phone: number;
    eMail: string;
    birthDay: string;
    citizen: string;
    tourId: string;
    userId: string;
    _id?:string;
    orderType?:string;

    constructor(nameTicket,price,date,location,firstName,lastName, phone, eMail, birthDay, citizen, tourId, userId, orderType) {
        this.nameTicket = nameTicket;
        this.price = price;
        this.date = date;
        this.location = location;
        this.firstName = firstName ;
        this.lastName = lastName ;
        this.phone = phone ;
        this.eMail = eMail ;
        this.birthDay = birthDay ;
        this.citizen = citizen;
        this.tourId = tourId;
        this.userId = userId;
        this.orderType = orderType;
    }
}