import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule }     from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { CartDataService }  from './cart-data.service';

import { AppComponent } from './app.component';
import { ProductCardComponent } from './product-card.component';
import { ProductsComponent } from './products.component';

import { CartService } from './cart.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(CartDataService, {delay: 0}),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    ProductCardComponent,
    ProductsComponent,
  ],
  providers: [ 
    CartService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
