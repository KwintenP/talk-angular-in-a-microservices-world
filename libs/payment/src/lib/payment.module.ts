import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

export const paymentRoutes: Route[] = [];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [ShoppingCartComponent]
})
export class PaymentModule {}
