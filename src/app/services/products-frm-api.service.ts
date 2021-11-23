import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProductfrmAPI } from '../Models/iproductfrm-api';

@Injectable({
  providedIn: 'root'
})
export class ProductsFrmAPIService {

  constructor(private httpService: HttpClient) { }

  getAll():Observable<IProductfrmAPI[]>{
    return this.httpService.get<IProductfrmAPI[]>(`${environment.Api}/products`);
  }

  getProductByID(prdID:number):Observable<IProductfrmAPI>{
    return this.httpService.get<IProductfrmAPI>(`${environment.Api}/products/${prdID}`);
  }

  addProduct(prd:IProductfrmAPI):Observable<any>{
    const httpOptions={
      headers: new HttpHeaders({
        'content-type': 'application/JSON'
      })
    }
    return this.httpService
    .post(`${environment.Api}/products`, JSON.stringify(prd),httpOptions)
  }

}
