import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Tour, TourDocument } from "../../schemas/tour";
import { Model } from 'mongoose';
import { TourDto } from 'src/dto/tour-dto';
import { ITour, ITourClient } from 'src/interface/tour';

@Injectable()
export class ToursService {
    // private  toursCount = 10;
    constructor( @InjectModel(Tour.name) private  tourModel: Model<TourDocument>) {

    }
    async deleteTours(): Promise<any>{
        return  this.tourModel.deleteMany({})
    }
    async getAllTours(): Promise<ITour[]>{
         return  this.tourModel.find()
    }
    async getTourById(id): Promise<ITour>{
        return  this.tourModel.findById(id);
    }

    async uploadTour(body: ITourClient){
        const tour = new TourDto(body.name,body.location,body.description,
            body.tourOperator,body.price,body.date,body.img,body.type);
        const tourData = new this.tourModel(tour);
        await tourData.save();
    }

    async getToursByName(name): Promise<ITour[]> {
        return this.tourModel.find({name: { "$regex": name, "$options": "i" }})
    }

    async deleteTourById(_id): Promise<ITour> {
        return this.tourModel.findByIdAndRemove({"_id": _id});
    }

}
