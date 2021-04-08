import { ItemService } from './../item.service';
import { Item } from './../item';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
})
export class DetailViewComponent implements OnInit {

  itemToSell: Item;

  constructor(public route: ActivatedRoute, public itemService:ItemService, public location: Location) { }

  ngOnInit(): void {
    var id: number = +this.route.snapshot.paramMap.get('id');
    this.itemToSell = this.itemService.getItem(id);
  }

  goBack(){
    this.location.back();
  }
}
