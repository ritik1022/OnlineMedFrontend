import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { TransactComponent } from '../transact/transact.component';

@Component({
  selector: 'app-real-payment',
  templateUrl: './real-payment.component.html',
  styleUrls: ['./real-payment.component.css']
})
export class RealPaymentComponent implements OnInit {

  public payBill !: FormGroup;
  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router : Router, private c1:CartService) { }

  ngOnInit(): void {
    this.payBill = this.formBuilder.group({
      name: [''],
      amount :this.c1.getTotalPrice(),
      address:[''],
      mobilenumber :['']
    })
    
  }
  paybill(){
    
    this.http.post<any>(" http://localhost:8443/payment", this.payBill.value)
    .subscribe(res=>{
      alert("Successfully Paid!!!")
      //this.t1.getAllTransaction();
      this.router.navigate(['transact']);
    },err=>{
      alert("Something went wrong")
    })
    }

}
