export class Transaction{
    id: Int16Array;
    address:string;
    amount:number;
    mobilenumber:number;
    name:string;

    constructor(id: Int16Array,
        address:string,
        amount:number,
        mobilenumber:number,
        name:string){
            this.id=id;
            this.address=address;
            this.amount=amount;
            this.mobilenumber=mobilenumber;
            this.name=name;

        }

        

    
}