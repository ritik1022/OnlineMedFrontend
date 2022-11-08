import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from './api.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  adminData!:any;
  formValue!: FormGroup;
  transactionDetails= null;

  constructor(private formbuilder: FormBuilder,private api: ApiService,private router:Router) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      id :[''],
      address: [''],
      amount: [''],
      mobilenumber: [''],
      name:[''],


    });
    this.getAllTransaction()

  }
  getAllTransaction(){
    this.api.getAllTrans().subscribe((res) => {
      //this.adminData = res;
      console.log(res);
     // this.getAllTransaction();
     this.transactionDetails=res;
    
    })
    
}
}


