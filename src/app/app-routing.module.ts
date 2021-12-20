
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ElectronicsComponent} from './electronics/electronics.component'
import {ContactComponent} from './contact/contact.component';
import {NoPageFoundComponentComponent} from './no-page-found-component/no-page-found-component.component';
import { UserDisplayComponent } from './user-display/user-display.component';
import { UserService } from './user.service';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuardService } from './authguard.service';
import { AuthenticationService } from './authentication.service';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ThankyouPAPComponent } from './thankyou-pap/thankyou-pap.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';

const routes: Routes = [
  {path:'',redirectTo:"/home",pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'userdisplay',component:UserDisplayComponent,canActivate:[AuthGuardService]},
  {path:'userdisplayid/:id',component:UserDisplayComponent,canActivate:[AuthGuardService]},

  {path:'userdisplayname/:name',component:UserDisplayComponent,canActivate:[AuthGuardService]},
  {path:'electronics',component:ElectronicsComponent,canActivate:[AuthGuardService]},
  {path:'contact',component:ContactComponent},
  {path:'login',component:LoginComponent},
  {path: 'cart', component:CartComponent,canActivate:[AuthGuardService]},
  {path: 'checkout', component:CheckoutComponent},
  {path: 'thankyoupap', component:ThankyouPAPComponent},
  {path: 'forgetpassword', component:ForgetPasswordComponent},
  {path:'signup',component:SignupComponent},
  {path:'**',component:NoPageFoundComponentComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
