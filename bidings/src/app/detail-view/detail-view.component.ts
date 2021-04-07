import { Item } from './../item';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
})
export class DetailViewComponent implements OnInit {
  @Input()
  itemToSell: Item;

  constructor() { }

  ngOnInit(): void {
  }

}
