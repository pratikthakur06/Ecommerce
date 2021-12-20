import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

 public signupForm!:FormGroup;
  constructor(private formBuilder:FormBuilder ,private http:HttpClient,private router:Router){}
 

  ngOnInit():void {
    this.signupForm=this.formBuilder.group({
      name:['', Validators.required],
      email:['',Validators.required],
      phoneNo:['',Validators.required],
      password:['',Validators.required]
    })
      
    }
    signUp(){
      this.http.post<any>("http://localhost:8002/addUser",this.signupForm.value)
      .subscribe(res=>{
        alert("Signup Successfull");
        this.signupForm.reset();
        this.router.navigate(['login']);
      },err=>{
        alert("Something went wrong");
      
      })
    }
    
  }
  


