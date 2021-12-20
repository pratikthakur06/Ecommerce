
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; 
import { AuthenticationService} from '../authentication.service'; 
import { AuthGuardService } from '../authguard.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 public loginForm!:FormGroup
  constructor(private formBuilder:FormBuilder,private http:HttpClient,private router:Router,private authenticationService:AuthenticationService,private authGuardService:AuthGuardService){}
  logInForAuthGuard()
  {
    this.authenticationService.login();
  }
  
  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      email:['', Validators.required],
      password:['', Validators.required]
    })
  }
  login(){
    this.http.get<any>("http://localhost:8002/getAllUsers")
    .subscribe(res=>{
      const user=res.find((a:any)=>{
        return a.email===this.loginForm.value.email && a.password===this.loginForm.value.password 
      });
      if(user){
        alert("Successful LOGIN!!");
        this.loginForm.reset();
        this.router.navigate(['home'])
      }else{
        alert("User not found")
      }
    },err=>{
      alert("Somthing went wrong")
    })
    }
  }


