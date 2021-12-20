import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private cartService:CartService,private http:HttpClient,private router:Router) { }

  public amount!:number;

  ngOnInit(): void {
    this.amount = this.cartService.getTotalPrice();
    return ;
  }

  emptycart(){
    this.cartService.removeAllCart();
  }

  confirmOrder(){
    
  }

}
