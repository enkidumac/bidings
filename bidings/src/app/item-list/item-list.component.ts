import { ItemService } from './../item.service';
import { Component, OnInit } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  items: Item[];

  constructor(public itemService: ItemService) { }

  ngOnInit(): void {
     this.items = this.itemService.getList();
  }

}
