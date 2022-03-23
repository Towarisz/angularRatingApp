import { HttpRequestService } from './../http-request.service';
import { Component, OnInit } from '@angular/core';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  data:any;
  location:any;
  loaded:boolean = true;
  constructor(private http:HttpRequestService) { }

  ngOnInit(): void {
  }

  getData(){
    this.loaded = false
    const lon = this.location.split(";")[0]
    const lat = this.location.split(";")[1]
    let params = new HttpParams();
    params = params.append("lon",lon)
    params = params.append("lat",lat)
    params = params.append("unit","metric")
    params = params.append("output","json")
    params = params.append("product","civil")

    const response = this.http.request("https://www.7timer.info/bin/api.pl",params)
    response.subscribe(
      _data => {
        this.data = _data;
        this.data = this.data.dataseries[0];
        this.loaded = true;
       } 
    )
  }

}
