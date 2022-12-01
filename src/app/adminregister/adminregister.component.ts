import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms'
import { Router } from '@angular/router';
@Component({
  selector: 'app-adminregister',
  templateUrl: './adminregister.component.html',
  styleUrls: ['./adminregister.component.css']
})
export class AdminregisterComponent implements OnInit {

  public adminregisterForm !: FormGroup;

  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router : Router) { }

  ngOnInit(): void {
    this.adminregisterForm = this.formBuilder.group({
      email:[''],
      password :[''],
      
    })
  }
registeradmin(){
  this.http.post<any>(" http://localhost:8443/createadminaccount", this.adminregisterForm.value)
.subscribe(res=>{
  alert("Successfully Registered !!!")
  this.adminregisterForm.reset();
  this.router.navigate(['adminlogin']);
},err=>{
  alert("Something went wrong")
})
}


}
