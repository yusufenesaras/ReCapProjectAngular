import { BrandService } from 'src/app/services/brand/brand.service';
import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand/brand';
@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  brands:Brand[] = [];
  constructor(private brandService:BrandService) { }

  ngOnInit(): void {
    this.getBrands();
    
  }

  getBrands(){
    this.brandService.getBrands().subscribe(response=>{
      console.log(response)
      this.brands = response
     
    });
  }
}