import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  
  public cartItemList : any =[]
  public productList = new BehaviorSubject<any>(this.cartItemList);
  public search = new BehaviorSubject<string>("");

  constructor(private http:HttpClient) { }

  getProducts(){
    return this.productList.asObservable();
  }

  setProduct(product : any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  addtoCart(product : any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList)
    // this.http.post<any>("http://localhost:8002/addToCart",this.productList.value)
    //   .subscribe(res=>{
    //     alert("Product added to Cart Successfully");
    //   },err=>{
    //     alert("Something went wrong");
      
    //   })
  }
  getTotalPrice() : number{
    var grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += (a.price * a.quantity);
    })
    return grandTotal;
  }

  removeCartItem(product: any){
    // var cartItem=[...this.productList.getValue()]
    // console.log(product);
    // console.log(this.cartItemList);
    // console.log(product.productId);
    
    
    // this.productList.getValue().map((a:any, index:any)=>{
    //   if(product.productId== a.productId){
    //     cartItem.splice(index,1);
    //   }
    // })
    // this.productList.next(cartItem);

    this.cartItemList.map((a:any, index:any)=>{
      if(product.productId=== a.productId){
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList);
  }
  removeAllCart(){
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }
}

