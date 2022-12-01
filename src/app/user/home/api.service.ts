import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

    constructor(private http : HttpClient) { }
   
    getMedicine() {
      return this.http.get<any>('http://localhost:8443/getallMedicinedetails').pipe(
        map((res: any) => {
          return res;
        }))
    }

    

   
    
    // sortByPrice(){
    // return this.http.get<any>('http://localhost:8443/food/sort/price').pipe(
    //     map((res: any) => {
    //       return res;
    //     })
    //   );
    // }
}