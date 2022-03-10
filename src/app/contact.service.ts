import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private _data:any={};
  constructor() {
    this._data.selValue="";
    this._data.topValue="";
    this._data.desValue="";
   }
   set data(info:any){
    this._data = info;
   }
}
