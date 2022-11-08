export class Food {
    id:Int16Array;
    cuisinename:string;
    category:string;
    description:string;
    foodname:string;
    price:Float32Array;
    status:string;
    
    constructor(id: Int16Array,cuisinename: string,category: string,description: string,foodname: string,price: Float32Array,status: string) { 
      this.id=id;
      this.cuisinename=cuisinename;
      this.category=category;
      this.description=description;
      this.foodname=foodname;
      this.price=price;
      this.status=status;
    }
}