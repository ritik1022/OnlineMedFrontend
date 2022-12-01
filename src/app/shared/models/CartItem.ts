import { MedicineModel } from "./Medicine";

export class CartItem{
    constructor(medicine:MedicineModel){
      this.medicine = medicine;  
    }
    medicine:MedicineModel;
    quantity:number = 1;

    get price():number{
        return this.medicine.medicinePrice * this.quantity;
    }
}