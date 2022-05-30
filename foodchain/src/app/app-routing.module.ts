import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FarmerentryComponent } from './farmerentry/farmerentry.component';
import { PaymentComponent } from './payment/payment.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { PaymentnextComponent } from './paymentnext/paymentnext.component';
import { UpipaymentComponent } from './upipayment/upipayment.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { NetbankComponent } from './netbank/netbank.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'farmerslogin',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'farmerentry',component:FarmerentryComponent},
  {path:'payment',component:PaymentComponent},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'paymentnext',component:PaymentnextComponent},
  {path:'upipayment',component:UpipaymentComponent},
  {path:'adminDashboard',component:AdmindashboardComponent},
  {path:'netbank',component:NetbankComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
