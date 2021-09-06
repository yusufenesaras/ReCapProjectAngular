import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car/car';
import { CarService } from 'src/app/services/car/car.service';
@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars:Car[] = [];
  currentCar : Car;
  dataLoaded = false;

  constructor(private carService:CarService,
    private activatedRoute:ActivatedRoute) {
      
     }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["brandId"]) {
        this.getByBrandId(params["brandId"])
      }else if (params["colorId"]) {
        this.getByColorId(params["colorId"])
      }else if(params["carId"]){
        this.getCarDetailsById(params["carId"])
      }else{
        this.getCarDetailsByDto()
      }
    })
  }

  getCars(){
    this.carService.getCars().subscribe(response => {
      this.cars = response.data
      this.dataLoaded = true;
    });
  }

  getCarDetailsByDto(){ 
    this.carService.getCarDetailsByDto().subscribe(response => {
      this.cars = response.data
      this.dataLoaded = true;
    });
  }

  getByBrandId(brandId:number){
    this.carService.getByBrandId(brandId).subscribe(response => {
      this.cars = response
      this.dataLoaded = true;
    });
  }

  getByColorId(colorId:number){
    this.carService.getByBrandId(colorId).subscribe(response => {
      this.cars = response
      this.dataLoaded = true;
    });
  }

  getCarDetailsById(carId:number){
    this.carService.getCarDetailsById(carId).subscribe(response => {
      this.cars = response.data
    });
  }
  setCurrentCar(car:Car){
    this.currentCar = car;
  }

  getCurrentCarClass(car:Car){
    if(car == this.currentCar){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }

}
