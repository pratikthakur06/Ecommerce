import { Injectable } from '@angular/core';
import { RouterModule,Router,Route } from '@angular/router';
import { fn } from '@angular/compiler/src/output/output_ast';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor(private http:HttpClient){}
arrUsers = this.http.get("http://localhost:8002/getAllUsers");
getAllUsers(){
  return this.http.get("http://localhost:8002/getAllUsers");
}

getProductByName(email:string){
  this.arrUsers=this.http.get("http://localhost:8002/getUserByEmail/:email")
  return this.arrUsers.forEach((user_ele:any)=>user_ele.email==email);
}
}