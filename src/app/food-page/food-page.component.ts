import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart.service';


import { FoodModel } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {

  food!: FoodModel;
  constructor(private activatedRoute:ActivatedRoute,
    private foodModel: FoodModel,
    private cartService: CartService,
    private router: Router) { 
    activatedRoute.params.subscribe((params) => {
      if(params['id'])
      this.food = foodModel.getFoodById(params['id']);
    })

  }

  ngOnInit(): void {
  }

  addtoCart(){
    this.cartService.addtoCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }

}
