import { Response } from './../model/response/response';
import { Socio } from './../model/socio/socio';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map, Observable } from 'rxjs';
import { constants } from 'buffer';

@Injectable({
  providedIn: 'root'
})
export class SocioService {
  private url=`${environment.url}/socios`


  constructor(private http:HttpClient) { }



  crear(body:Socio):Observable<Response<Socio>>{
    const request = {
      data: [body]
    };
    return this.http
    .post<Response<Socio>>(`${this.url}/`, request);
  }
}

