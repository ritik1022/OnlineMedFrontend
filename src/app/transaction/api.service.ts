import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators'

@Injectable({
    providedIn: 'root'
  })

  export class ApiService {

    constructor(private http : HttpClient) { }

    getAllTrans(){
        return this.http.get<any>('http://localhost:8082/alltransactions').pipe(
        map((res: any) => {
          return res;
        }))

    }
}