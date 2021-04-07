import { Cat } from './../cat';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-bidings',
  templateUrl: './show-bidings.component.html',
  styleUrls: ['./show-bidings.component.css']
})
export class ShowBidingsComponent implements OnInit {
  text = "ala ma kota";
  textOther = "kot ma ale";

  @Input()
  bookName?:Cat;

  constructor() { }

  ngOnInit(): void {
  }

  changeText(argumentValue:string){
    this.text = argumentValue;
  }

}
