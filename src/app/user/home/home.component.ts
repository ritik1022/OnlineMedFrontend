
import { FoodModel } from 'src/app/shared/models/Food';
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
  foodmodelobj: FoodModel = new FoodModel();

  foodData!: any;

  showAdd!: boolean;
  showUpdate!: boolean;
  formValue!: FormGroup;
  veg!: string;
  
 
  constructor(private router:Router, private activatedRoute: ActivatedRoute,private formbuilder: FormBuilder,private api: ApiService,
    private cartService: CartService,private http : HttpClient) {}

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      category :[''],
      cuisinename: [''],
      description: [''],
      foodname: [''],
      offers:[''],
      price: [''],
      status: [''],

    });
   
    this.getAllFood();

  }
  getAllFood() {
    this.api.getFood().subscribe((res: any) => {
      this.foodData = res;
      
      
      this.foodData.forEach((a:any)=>{
        Object.assign(a,{quantity:1,total:a.price});
      });
    })
  }
 
  search(){
    
    if(this.searchTerm==""){
      console.log("correct")
      this.getAllFood();
    }else{
      this.foodData=this.foodData.filter((res: any)=>{
        console.log(res)
       return res.foodname.toLowerCase().match(this.searchTerm.toLowerCase());
      // return this.searchTerm
      
      })
    }
  }
  

  sortByVeg(){
    console.log("button clicked")
    this.api.sortByVeg().subscribe((res:any)=>{
      this.foodData=res;
      this.foodData.forEach((a:any)=>{
        Object.assign(a,{quantity:1,total:a.price});
      });
    })

  }

  sortByNonVeg(){
    console.log("button clicked")
    this.api.sortByNonVeg().subscribe((res:any)=>{
      this.foodData=res;
      this.foodData.forEach((a:any)=>{
        Object.assign(a,{quantity:1,total:a.price});
      });
    })

  }
  sortByprice(){
    console.log("button clicked")
    this.api.sortByPrice().subscribe((res:any)=>{
      this.foodData=res;
      this.foodData.forEach((a:any)=>{
        Object.assign(a,{quantity:1,total:a.price});
      });
    })

  }

  



  addtoCart(row: any){
    this.cartService.addtoCart(row);
  }
  row(row: any) {
    throw new Error('Method not implemented.');
  }
  food(food: any) {
    throw new Error('Method not implemented.');
  }
}
