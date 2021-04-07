import { Item } from './item';
import { Cat } from './cat';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bidings';
  cat= new Cat("Piskorski");

  selectedItem = new Item(0,129,"Mi band 5");
}
