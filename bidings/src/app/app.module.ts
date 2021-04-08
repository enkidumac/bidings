import { ItemService } from './item.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShowBidingsComponent } from './show-bidings/show-bidings.component';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { ItemListComponent } from './item-list/item-list.component';
import { BasketComponent } from './basket/basket.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowBidingsComponent,
    DetailViewComponent,
    ItemListComponent,
    BasketComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
