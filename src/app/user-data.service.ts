import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private _data:any;
  setParam;
  constructor() {
    this._data={username:"Mateusz Stoch",nickname:"Mati",phoneNumber:"123456789",adress:"Ulica",emailAdress:"e-mail@gmail.com"};

    this.setParam =  function(key:string,value:string){
      this._data[key] = value;
   }
}
   
   
   get data(){
     return this._data;
   }
 } 
