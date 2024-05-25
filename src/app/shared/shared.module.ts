import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';

import { MiddleHeaderComponent } from './middle-header/middle-header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuComponent } from './menu/menu.component';
import { ItemComponent } from './menu/item/item.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { FooterUpComponent } from './footer-up/footer-up.component';
import { FooterMiddleComponent } from './footer-middle/footer-middle.component';
import { FooterDownComponent } from './footer-down/footer-down.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    HeaderComponent,
    MiddleHeaderComponent,
         NavbarComponent,
         MenuComponent,
         ItemComponent,
         NewsletterComponent,
         FooterUpComponent,
         FooterMiddleComponent,
         FooterDownComponent,
  ],
  imports: [
    CommonModule,    
    AppRoutingModule

  ],
  exports:[
    HeaderComponent,
    MiddleHeaderComponent,
    NavbarComponent,
    MenuComponent,
    NewsletterComponent,
    FooterUpComponent,
    FooterMiddleComponent,
    FooterDownComponent    

  ]
})
export class SharedModule { }
