import { Item } from './item';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  items: Item[] = [
      new Item(1,32,"Harry potta"),
      new Item(2,30, "Coś"),
      new Item(3,25, "Diuna")
  ]

  constructor() { }

  getList(){
    return this.items;
  }

  getItem(id:number){
      return this.items.find(element => element.id === id);
  }
}
