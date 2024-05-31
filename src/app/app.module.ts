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
import { LignePanierComponent } from './checkout/ligne-panier/ligne-panier.component';
import { OrdersComponent } from './orders/orders.component';
import { OrdersService } from './orders/orders.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ChildComponent } from './products/child/child.component';
import {FormsModule} from "@angular/forms";
import { SuccessComponent } from './success/success.component';
import { CancelComponent } from './cancel/cancel.component';
import { environment } from 'src/environments/environment';

import { TestComponent } from './test/test.component';

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
    ChildComponent,
    LignePanierComponent,
    OrdersComponent,
    ProductDetailsComponent,
    SuccessComponent,
    CancelComponent
  
    ProductsComponent,
    TestComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule,
        OthersModule,
        HttpClientModule,
        RouterModule,
        FormsModule
          ],
  providers: [OrdersService],

  bootstrap: [AppComponent]
})
export class AppModule { }
