import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { ICategory } from '../Models/icategory';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpService:HttpClient) { }

  getAll():Observable<ICategory[]>{
    return this.httpService
               .get<ICategory[]>(`${environment.Api}/categories`);
  }

  getCategoryByID(catID:number):Observable<ICategory>{
    return this.httpService.get<ICategory>(`${environment.Api}/categories/${catID}`);
  }
}


