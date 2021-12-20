import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }
  getProduct(){
    return this.http.get<any>("http://localhost:8002/getAllProducts")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  forgetpassword(email:any,):Observable<any>{
    alert(email);
    return this.http.get("http://localhost:8002/getUserByEmail/"+email,{ headers: { 'content-type': 'application/json' }, responseType: 'text' })
  }

}
