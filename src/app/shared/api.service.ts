import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }
  postMedicineDetails(data : any){
    return this.http.post<any>("http://localhost:8443/addmedicine",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  getAllMedicine() {
    return this.http.get<any>('http://localhost:8443/getallMedicinedetails').pipe(
      map((res: any) => {
        return res;
      }))
  }

  updateMedicine(data: any, id: number) {
    return this.http.put<any>('http://localhost:8443/updatemedicine/' + id, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  deleteMedicine(id: number) {
    return this.http.delete<any>('http://localhost:8443/deletemedicine/' + id).pipe(
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
