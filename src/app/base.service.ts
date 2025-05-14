import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  api="https://webshop-9badc-default-rtdb.europe-west1.firebasedatabase.app/products.json"
  
  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get(this.api)
  }
}
