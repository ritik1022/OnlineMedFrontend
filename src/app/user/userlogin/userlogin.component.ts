import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { FormBuilder, FormGroup, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  
  public loginform!: FormGroup
  constructor(private formBuilder : FormBuilder, private http :HttpClient, private router : Router) { }

  ngOnInit(): void {
    this.loginform=this.formBuilder.group({
      email: ['', Validators.required, Validators.email], 
      password:['', Validators.required,
      Validators.minLength(6),
      Validators.maxLength(40)]
    })
  }
login():String{
  
  //post method, params= username/pw, obj
  /*this.http.get<any>(" http://localhost:8082/signin",)
  .subscribe(res=>{
    const user =res.find ((a:any)=>{
      return a.email === this.loginform.value.email && 
      a.password === this.loginform.value.password
    }); 
    
    if(user){
      alert("Login Success");
      this.loginform.reset();
      this.router.navigate(['home'])
    }else{
      alert("User not found");
    }
    },err=>{
      alert("Something went wrong")
    })*/
   
    
   
   console.log("checking user")
   //const user = new User(this.loginform.value.email, this.loginform.value.password)
   //console.log(user);
   const httpOptions = {
    headers : new HttpHeaders({
      'Content-Type':'application/json',
    })
  };
  
   this.http.post<any>("http://localhost:8082/signin", this.loginform.value, httpOptions)
  .subscribe(res=>{
    if((res===true)){
      alert("Successfully login !!!")
      this.router.navigate(['home']);

    }
    else{
      alert("Wrong email or password")
    }
    
    
  },err=>{
    alert("Something went wrong")
  })
  
 return "";
}
}
