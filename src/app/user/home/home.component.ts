
import { MedicineModel } from 'src/app/shared/models/Medicine';
import { Component, Injectable, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms';
import { ApiService } from './api.service';
import { CartService } from 'src/app/services/cart.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  searchTerm:any;
  medicinemodelobj: MedicineModel = new MedicineModel();

  medicineData!: any;

  showAdd!: boolean;
  showUpdate!: boolean;
  formValue!: FormGroup;
  
  
 
  constructor(private router:Router, private activatedRoute: ActivatedRoute,private formbuilder: FormBuilder,private api: ApiService,
    private cartService: CartService,private http : HttpClient) {}

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
     
      medicineDescription: [''],
      medicineName: [''],
      medicinePrice: [''],
      instock: [''],

    });
   
    this.getAllMedicine();

  }
  getAllMedicine() {
    this.api.getMedicine().subscribe((res: any) => {
      this.medicineData = res;
      
      
      this.medicineData.forEach((a:any)=>{
        Object.assign(a,{quantity:1,total:a.price});
      });
    })
  }
 
  search(){
    
    if(this.searchTerm==""){
      console.log("correct")
      this.getAllMedicine();
    }else{
      this.medicineData=this.medicineData.filter((res: any)=>{
        console.log(res)
       return res.medicineName.toLowerCase().match(this.searchTerm.toLowerCase());
      // return this.searchTerm
      
      })
    }
  }
  

 

  

  
  // sortByprice(){
  //   console.log("button clicked")
  //   this.api.sortByPrice().subscribe((res:any)=>{
  //     this.medicineData=res;
  //     this.medicineData.forEach((a:any)=>{
  //       Object.assign(a,{quantity:1,total:a.price});
  //     });
  //   })

  // }

  



  addtoCart(row: any){
    this.cartService.addtoCart(row);
  }
  row(row: any) {
    throw new Error('Method not implemented.');
  }
  medicine(medicine: any) {
    throw new Error('Method not implemented.');
  }
}
