import { Car } from "../car/car";
import { CarImage } from "../carImage/carImage";

export interface CarDetail{
    car:Car;
    imageList:CarImage[];
}