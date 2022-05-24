import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FarmerentryComponent } from './farmerentry/farmerentry.component';
import { SignupComponent } from './signup/signup.component';
import { PageComponent } from './page/page.component';
import { HttpClientModule } from '@angular/common/http';
import { OrderComponent } from './order/order.component';
// import { Orger2Component } from './orger2/orger2.component';
import { Order3Component } from './order3/order3.component';
import { PaymentComponent } from './payment/payment.component';
// import { ProductComponent } from './product/product.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    FarmerentryComponent,
    SignupComponent,
    PageComponent,
    OrderComponent,
    // Orger2Component,
    Order3Component,
    PaymentComponent,
    // ProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
