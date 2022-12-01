import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { FormBuilder, FormGroup, Validators} from '@angular/forms'
import { Router } from '@angular/router';
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {


  public loginform!: FormGroup
  constructor(private formBuilder : FormBuilder, private http :HttpClient, private router : Router) { }

  ngOnInit(): void {
    this.loginform=this.formBuilder.group({
      email: ['', Validators.required, Validators.email],
      password:['', [Validators.required,
      Validators.minLength(6),
      Validators.maxLength(40)]]
    })
  }
login():String{
  const httpOptions = {
    headers : new HttpHeaders({
      'Content-Type':'application/json',
    })
  };
  this.http.post<any>(" http://localhost:8443/adminlogin",this.loginform.value, httpOptions)
  // .subscribe(res=>{
  //   const user =res.find ((a:any)=>{
  //     return a.email === this.loginform.value.email && 
  //     a.password === this.loginform.value.password
  //   });
  //   if(user){
  //     alert("Login Success");
  //     this.loginform.reset();
  //     this.router.navigate(['crud'])
  //   }else{
  //     alert("User not found");
  //   }
  //   }
  .subscribe(res=>{
    if((res===true)){
      alert("Admin Successfully login !!!")
      this.router.navigate(['crud']);

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