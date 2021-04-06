import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShowBidingsComponent } from './show-bidings/show-bidings.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowBidingsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
