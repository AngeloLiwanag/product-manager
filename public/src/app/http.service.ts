import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) { }
  getAll(){
    console.log('Inside getAll() service')
    return this._http.get(`/products`);
  }
  getOne(id){
    console.log('Inside getOne() service')
    return this._http.get(`/products/${id}`);
  }
  create(newProduct){
    console.log('Inside create() service')
    return this._http.post(`/products`, newProduct);
  }
  update(id, updateProduct){
    console.log('Inside update() service')
    return this._http.put(`/products/${id}`, updateProduct);
  }
  delete(id){
    console.log('Inside delete() service')
    return this._http.delete(`/products/${id}`);
  }
}
