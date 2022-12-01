import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-transact',
  templateUrl: './transact.component.html',
  styleUrls: ['./transact.component.css']
})
export class TransactComponent implements OnInit {

  adminData!:any;
  formValue!: FormGroup;
  transactionDetails!: any;
 
  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.getAllTransaction()
  }
  getAllTransaction(){
    this.api.getAllTrans().subscribe((res) => {
      //this.adminData = res;
      console.log(res);
     // this.getAllTransaction();
     this.transactionDetails=res;
    console.log(this.transactionDetails);
    
    })}
   


}
