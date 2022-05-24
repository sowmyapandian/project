import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FarmerentryComponent } from './farmerentry/farmerentry.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'farmerslogin',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'farmerentry',component:FarmerentryComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
