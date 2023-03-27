import { ITour } from "src/interface/tour"


export class TourDto implements ITour {
    name:string;
    location: string;
    description:string;
    tourOperator:string;
    price:number;
    date: string;
    img:string;
    type: string;
    id:string;
    
constructor( name,location,description, tourOperator,price,date,img,type) {
    this.name=name;
    this.location = location;
    this.description = description;
    this.tourOperator=tourOperator;
    this.price=price;
    this.date = date;
    this.img = img;
    this.type = type;
}

}