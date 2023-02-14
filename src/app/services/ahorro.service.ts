import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AhorroService {

  private url=`${environment.url}/ahorros/`

  constructor(private http:HttpClient) { }

  getAhorro(body:any){
    return this.http
    .post(`${this.url}history/`, body)
    .pipe(
      map((res:any)=>{
        return res.data;
      })
    )
  }
}
