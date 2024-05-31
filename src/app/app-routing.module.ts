import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MiddleHeaderComponent } from './shared/middle-header/middle-header.component';
import { SignInComponent } from './authentification/sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './authentification/sign-up/sign-up.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PaymentComponent } from './payment/payment.component';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import {AppComponent} from "./app.component";
import { ProductDetailsComponent } from './others/product-details/product-details.component';
import { SuccessComponent } from './success/success.component';
import { CancelComponent } from './cancel/cancel.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'checkout/:clientId', component: CheckoutComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'orders', component: OrdersComponent },
  {path : ':id',component : AppComponent},
  { path: 'product-details', component: ProductDetailsComponent },
  { path: 'success', component: SuccessComponent},
  { path: 'cancel', component: CancelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
