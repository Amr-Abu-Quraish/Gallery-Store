import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproduct } from '../../../shared/interfaces/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

 constructor(private httpClient:HttpClient) { }




  getAllProducts():Observable<any>{
    return this.httpClient.get(`https://fakestoreapi.com/products`)
  }

  getSpecificProducts(id:string | any ):Observable<any>{
    return this.httpClient.get(`https://fakestoreapi.com/products/${id}`)
  }





}

