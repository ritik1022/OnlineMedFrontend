import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { FormGroup, FormBuilder} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  public payBill !: FormGroup;
  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router : Router) { }

  ngOnInit(): void {
    this.payBill = this.formBuilder.group({
      name:[''],
      amount :[''],
      address:[''],
      mobilenumber :['']
    })
  }
  paybill(){
    
    this.http.post<any>(" http://localhost:8082/payment", this.payBill.value)
    .subscribe(res=>{
      alert("Successfully Paid!!!")
      
      this.router.navigate(['']);
    },err=>{
      alert("Something went wrong")
    })
    }

}


  