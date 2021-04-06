import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-bidings',
  templateUrl: './show-bidings.component.html',
  styleUrls: ['./show-bidings.component.css']
})
export class ShowBidingsComponent implements OnInit {
  tekst = "ala ma kota";
  tekstInny = "kot ma ale";


  constructor() { }

  ngOnInit(): void {
  }

  zmienTeksts(argumentValue:string){
    this.tekst = argumentValue;
  }

}
