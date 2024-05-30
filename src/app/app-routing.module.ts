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
<<<<<<< HEAD
import {AppComponent} from "./app.component";

=======
import { ProductDetailsComponent } from './others/product-details/product-details.component';
>>>>>>> 9ca061f2c0e1a610adceab8f2416b7cac25b2a4d

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'orders', component: OrdersComponent },
<<<<<<< HEAD
  {path : ':id',component : AppComponent}
=======
  { path: 'product-details', component: ProductDetailsComponent }
>>>>>>> 9ca061f2c0e1a610adceab8f2416b7cac25b2a4d
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
