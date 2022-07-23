import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import { HeaderComponent } from './header/header.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { ProuductListComponent } from './components/prouduct-list/prouduct-list.component';
import { ProuductItemComponent } from './components/prouduct-item/prouduct-item.component';
import { ProuductItemDetailComponent } from './components/prouduct-item-detail/prouduct-item-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    HeaderComponent,
    ConfirmationComponent,
    ProuductListComponent,
    ProuductItemComponent,
    ProuductItemDetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
