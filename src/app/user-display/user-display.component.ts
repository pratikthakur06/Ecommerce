import { Component, OnInit } from '@angular/core';
import {User} from '../user'
import { HttpClient } from '@angular/common/http';
import { RestService } from '../rest.service';
import { UserService } from '../user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.css']
})
export class UserDisplayComponent implements OnInit {

  constructor(private restService:RestService,private userService:UserService,private activatedRoute:ActivatedRoute,private router:Router) { }


  columns=["Full Name","Email","Phone Number"];


  
ngOnInit()
{
  this.activatedRoute.paramMap.subscribe((param)=>
  {
    
    if(param.get('email') !== null){
      this.nameFor = String(param.get('email'))
    } 
   
    
    if(this.nameFor!="")
    {
     
    this.displayBasedOnName();

    }
    else
    this.getAllProducts();
  });
}
readData()
{
  
this.restService.getUsers().subscribe(
  (data:any) =>
  {
    this.arrUsers=data;
    
  },
)
}

pname(){

  this.readData();
  this.restService.searchName(this.nameFor).subscribe(
    
    (data:any)=>
    {
this.arrUsers=data;
    }
  )


}
public nameFor?:any;

arrUsers:any=[];
  getAllProducts(){
   
    this.arrUsers=this.userService.getAllUsers();
    this.readData();
  }
  
  displayBasedOnName(){

    this.arrUsers=this.userService.getProductByName(this.nameFor)
    this.pname();
   
}

  displayAll()
  {
    
    this.arrUsers=this.userService.getAllUsers();
    this.readData();
  }
}