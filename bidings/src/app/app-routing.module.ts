import { BasketComponent } from './basket/basket.component';
import { ItemListComponent } from './item-list/item-list.component';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'itemlist', component: ItemListComponent },
  { path: 'basket', component: BasketComponent },
  { path: 'details/:id', component: DetailViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
