import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Tour, TourSchema } from 'src/schemas/tour';
import { ToursService } from 'src/services/tours/tours.service';
import { TourItemController } from './tour-item.controller';

@Module({
    controllers: [TourItemController],
    imports:  [MongooseModule.forFeature([{ name: Tour.name, schema: TourSchema }])],
    providers: [ToursService]
})
export class TourItemModule {}
