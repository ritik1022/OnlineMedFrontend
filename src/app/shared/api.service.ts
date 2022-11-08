import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }
  postFoodDetails(data : any){
    return this.http.post<any>("http://localhost:8082/addfood",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  getAllFood() {
    return this.http.get<any>('http://localhost:8082/getallfooddetails').pipe(
      map((res: any) => {
        return res;
      }))
  }

  updateFoodDetails(data: any, id: number) {
    return this.http.put<any>('http://localhost:8082/updatefood/' + id, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  deleteFood(id: number) {
    return this.http.delete<any>('http://localhost:8082/deletefood/' + id).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  // sortByVeg(keyword:any){
  //   return this.http.get<any>('http://localhost:8082/products/veg/' + keyword).pipe(
  //     map((res: any) => {
  //       return res;
  //     })
  //   );
  // }


  
}
