import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductCarouselComponent} from "./components/product-carousel/product-carousel.component";

const routes: Routes = [{path: 'test', component: ProductCarouselComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
