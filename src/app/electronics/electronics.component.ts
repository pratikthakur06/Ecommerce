import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { CartService } from 'src/app/cart.service';
import { ApiService } from 'src/app/api.service';
import { FilterPipe } from "src/app/filter.pipe";

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit {
  public totalItem : number = 0;
  public searchTerm !: string;

  public productList : any ;
  public filterCategory : any
  searchKey:string ="";
  constructor(private api : ApiService, private cartService : CartService) { }

  searchProduct:any;

  ngOnInit(): void {
    this.api.getProduct()
    .subscribe(res=>{
      this.productList = res;
      this.filterCategory = res;
      console.log(this.productList)
    });

    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })

    this.cartService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  }

  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
  }

  addtocart(item: any){
    this.cartService.addtoCart(item);
  }
  filter(category:string){
    this.filterCategory = this.productList
    .filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    })
  }

}
