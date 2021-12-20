import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { UserDisplayComponent } from './user-display/user-display.component';
import { NoPageFoundComponentComponent } from './no-page-found-component/no-page-found-component.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ThankyouPAPComponent } from './thankyou-pap/thankyou-pap.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';




@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    UserDisplayComponent,
    NoPageFoundComponentComponent,
    ElectronicsComponent,
    LoginComponent,
    SignupComponent,
    CartComponent,
    CheckoutComponent,
    ThankyouPAPComponent,
    ForgetPasswordComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,ReactiveFormsModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
