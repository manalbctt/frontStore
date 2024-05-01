import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { OthersModule } from './others/others.module';
import { SignInComponent } from './authentification/sign-in/sign-in.component';
import { SignUpComponent } from './authentification/sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent
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
