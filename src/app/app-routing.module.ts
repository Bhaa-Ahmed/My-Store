import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { ProuductListComponent } from './components/prouduct-list/prouduct-list.component';
import { ProuductItemDetailComponent } from './components/prouduct-item-detail/prouduct-item-detail.component';

const routes: Routes = [
  { path: '', component: ProuductListComponent },
  { path: 'cart', component: CartComponent },
  { path: 'confirmation', component: ConfirmationComponent },
  { path: 'productlist', component: ProuductListComponent },
  { path: 'productlist/:id/details', component: ProuductItemDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
