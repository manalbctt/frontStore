import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { OthersModule } from './others/others.module';
import { SignInComponent } from './authentification/sign-in/sign-in.component';
import { SignUpComponent } from './authentification/sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PaymentComponent } from './payment/payment.component';
import { ProductsComponent } from './products/products.component';
import { ChildComponent } from './products/child/child.component';
import { LignePanierComponent } from './checkout/ligne-panier/ligne-panier.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent,
    NotFoundComponent,
    ContactUsComponent,
    CheckoutComponent,
    PaymentComponent,
    ProductsComponent,
    ChildComponent,
    LignePanierComponent,
    OrdersComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    SharedModule,
    OthersModule
  ],
  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
