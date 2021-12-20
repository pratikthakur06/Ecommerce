import { Injectable } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  constructor() { }
  varIsLoggedIn="isLoggedIn";
  login(){
    localStorage.setItem(this.varIsLoggedIn,'true');
  }
  logout(){
    localStorage.setItem(this.varIsLoggedIn,'false');
  }
}