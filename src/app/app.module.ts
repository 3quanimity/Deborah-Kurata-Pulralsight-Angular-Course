import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.components';

@NgModule({
  imports: [ BrowserModule ], // external modules
  declarations: [ AppComponent, ProductListComponent  ], // components
  bootstrap: [ AppComponent ] // startup component of an application
})
export class AppModule { }
