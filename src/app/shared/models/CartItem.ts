import { FoodModel } from "./Food";

export class CartItem{
    constructor(food:FoodModel){
      this.food = food;  
    }
    food:FoodModel;
    quantity:number = 1;

    get price():number{
        return this.food.price * this.quantity;
    }
}