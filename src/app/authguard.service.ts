import { Injectable } from '@angular/core';
import { CanActivate,Router,ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { RouterModule, Routes } from '@angular/router';
@Injectable({
  providedIn: 'root'
})


export class AuthGuardService  implements CanActivate{
  
  constructor(private router:Router) { }
  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
    let bReturn=true;
    if(localStorage.getItem('isLoggedIn')=='false')
    {
      alert("Please LOGIN to view this page!!");
      this.router.navigate(['/login']);
      bReturn=false;
    }

return bReturn;
  }
}