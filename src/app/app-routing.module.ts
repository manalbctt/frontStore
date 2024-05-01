import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MiddleHeaderComponent } from './shared/middle-header/middle-header.component';
import { SignInComponent } from './authentification/sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './authentification/sign-up/sign-up.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route
  { path: 'sign-in', component: SignInComponent }, // Route for the about page
  { path: 'sign-up', component: SignUpComponent }, // Route for the about page
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
