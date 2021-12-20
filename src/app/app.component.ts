import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { AuthGuardService } from './authguard.service';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routingassignment';
  
  public totalItem : number = 0;
  constructor(private cartService : CartService,public authenticationService:AuthenticationService,private authGuardService:AuthGuardService){}
  
  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
  }
  
  logInForAuthGuard()
  {
    this.authenticationService.login();
  }
  logOutForAuthGuard()
  {
    this.authenticationService.logout();
  }

}