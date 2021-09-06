import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color/color';
import { ColorService } from 'src/app/services/color/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  colors:Color[] = [];
  currentColor : Color;

  constructor(private colorSerivce:ColorService) { }
  ngOnInit(): void {
    this.getColors();
  }

  getColors(){
    this.colorSerivce.getColors().subscribe(response=>{
      this.colors = response
    });
  }

  setCurrentColor(color:Color){
    this.currentColor = color;
  }

  getCurrentColorClass(color:Color){
    if(color == this.currentColor){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }
}
