import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent }        from './products.component';

const routes: Routes = [
  { path: '', component: ProductsComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
