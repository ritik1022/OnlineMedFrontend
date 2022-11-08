import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

    constructor(private http : HttpClient) { }
   
    getFood() {
      return this.http.get<any>('http://localhost:8082/getallfooddetails').pipe(
        map((res: any) => {
          return res;
        }))
    }

    sortByVeg(){
      return this.http.get<any>('http://localhost:8082/products/veg').pipe(
        map((res: any) => {
          return res;
        })
      );
    }

    sortByNonVeg(){
      return this.http.get<any>('http://localhost:8082/products/nonveg').pipe(
        map((res: any) => {
          return res;
        })
      );
    }

    sortByPrice(){
      return this.http.get<any>('http://localhost:8082/food/sort/price').pipe(
        map((res: any) => {
          return res;
        })
      );
    }
}