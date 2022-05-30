import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FarmerentryComponent } from './farmerentry/farmerentry.component';
import { SignupComponent } from './signup/signup.component';
import { PageComponent } from './page/page.component';
import { HttpClientModule } from '@angular/common/http';
// import { OrderComponent } from './order/order.component';
// import { Orger2Component } from './orger2/orger2.component';
import { Order3Component } from './order3/order3.component';
import { PaymentComponent } from './payment/payment.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { PaymentnextComponent } from './paymentnext/paymentnext.component';
import { ProducttableComponent } from './producttable/producttable.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpipaymentComponent } from './upipayment/upipayment.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { NetbankComponent } from './netbank/netbank.component';
import { ProductupdationComponent } from './productupdation/productupdation.component';
// import { UsersignupComponent } from './usersignup/usersignup.component';
// import { ProductComponent } from './product/product.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    FarmerentryComponent,
    SignupComponent,
    PageComponent,
    // OrderComponent,
    // Orger2Component,
    Order3Component,
    PaymentComponent,
    AdminloginComponent,
    PaymentnextComponent,
    ProducttableComponent,
    UpipaymentComponent,
    AdmindashboardComponent,
    NetbankComponent,
    ProductupdationComponent,
    // UsersignupComponent,
    // ProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
