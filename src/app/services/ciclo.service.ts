import { Observable } from 'rxjs';
import { Ciclo } from './../model/ciclo/ciclo';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Response } from './../model/response/response';

@Injectable({
    providedIn: 'root'
  })
  export class CicloService {
    private url=`${environment.url}/ciclos`
    
    constructor(private http:HttpClient) { }

    crear (body:Ciclo):Observable<Response<Ciclo>>{
        const request = {
            data: [body]
          };
        return this.http
        .post<Response<Ciclo>>(`${this.url}/`,request)
    }
  }

