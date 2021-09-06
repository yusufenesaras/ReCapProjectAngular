import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car/car';
import { CarImage } from 'src/app/models/carImage/carImage';
import { CarImageService } from 'src/app/services/carImage/car-image.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  cars: Car[] = [];
  carImages: CarImage[] = [];
  currentImage:CarImage;

  constructor(private carDetailService:CarImageService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["carId"]) {
        this.getCarDetail(params["carId"]);
        this.getCarImagesByCarId(params["carId"]);
      }
    })
  }
  
  getCarImagesByCarId(carId:number){
    this.carDetailService.getCarImagesByCarId(carId).subscribe(response=>{
      this.carImages = response.data
    })
  }

  getCarDetail(carId: number) {
    this.carDetailService.getCarDetailsById(carId).subscribe(response=>{
      this.cars = response.data
    })
  }
  getCarDetailsById(carId: number) {
    this.carDetailService.getCarDetailsById(carId).subscribe(response=>{
      this.cars = response.data
    })
  }


  getActivePhoto(index: number) {
    if (index == 0) {
      return "carousel-item active"
    }
    return "carousel-item"
  }

  getPhotoPath(image: CarImage) {
    let basePath = "https://localhost:44350/";
    return basePath + image.imagePath;
  }

  getButtonClass(image:CarImage){
    if (image=this.carImages[0]) {
      return "active";
    }
    else{
      return "";
    }
  }

  getCurrentImageClass(image:CarImage){
    if(this.carImages[0]==image){
      return "carousel-item active";
    } else {
      return "carousel-item ";
    }
  }
  
  setCurrentImageClass(image:CarImage){
    this.currentImage = image;
  }
}
