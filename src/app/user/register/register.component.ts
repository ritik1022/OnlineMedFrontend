import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms'
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm !: FormGroup;

  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router : Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name:['', Validators.required],
      email :['',  [Validators.required, Validators.email]],
      password :['',Validators.required,
      Validators.minLength(6),
      Validators.maxLength(40)],
      address:['', Validators.required],
      mobilenumber :['',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]
    })
  }
register(){
  this.http.post<any>(" http://localhost:8082/signup", this.registerForm.value)
.subscribe(res=>{
  alert("Successfully Registered !!!")
  this.registerForm.reset();
  this.router.navigate(['userlogin']);
},err=>{
  alert("Something went wrong")
})
}
}
