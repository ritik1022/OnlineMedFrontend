import { Component, OnInit } from '@angular/core';

import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/CartItem';
import { CartService } from '../services/cart.service';

import { MedicineModel } from '../shared/models/Medicine';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  cart!:Cart;
  
  public products : any = [];
  public grandTotal !: number;
  public granQuantity!: number;
  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
      this.granQuantity = this.cartService.getTotalQuantity();
    })
  }
  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }
  emptycart(){
    this.cartService.removeAllCart();
  }

}