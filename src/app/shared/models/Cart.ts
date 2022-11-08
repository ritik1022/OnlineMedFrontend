
import { CartItem } from 'src/app/shared/models/CartItem';


export class Cart{
    addToCart(row: any) {
      throw new Error('Method not implemented.');
    }
    items:CartItem[] = [];

    get totalPrice(): number{
        let totalPrice = 0;
        this.items.forEach(item => {
            totalPrice += item.price;
        });

        return totalPrice;
    }
}