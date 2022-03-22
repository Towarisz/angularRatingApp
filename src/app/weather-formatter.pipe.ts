import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weatherFormatter'
})
export class WeatherFormatterPipe implements PipeTransform {

  transform(value: any, args: number) {
    switch (args){
      case 0:
        return this.cloud(value);
      case 1:
        return this.index(value);
      case 2:
        return this.pType(value);
      case 3:
        return this.pAmmount(value);
      case 4:
        return this.wSpeed(value);
      default:
        return value;
    }
  }
  cloud(value:any){
    switch(value){
      case 1:
        return "Clear"
      case 2:
        return "Clear"
      case 3:
        return "Partly Cloudy"
      case 4:
        return "Partly Cloudy"
      case 5:
        return "Partly Cloudy"
      case 6:
        return "Cloudy"
      case 7:
        return "Cloudy"
      case 8:
        return "Very Cloudy"
      case 9:
        return "Very Cloudy"
      default:
        return "Error: Wrong value" + value
    }
  }

  index(value:any){
    switch(value){
      case -10:
        return "Very Unstable, Severe Thunderstorms Likely With Lifting Mechanism"
      case -6:
        return "Very Unstable, Severe Thunderstorms Likely With Lifting Mechanism"
      case -4:
        return "Unstable, Thunderstorms Likely, Some Severe With Lifting Mechanism"
      case -1:
        return "Slightly Unstable, Thunderstorms Possible, With Lifting Mechanism"
      case 2:
        return "Stable Conditions, Thunderstorms Not Likely"
      case 6:
        return "Stable Conditions, Thunderstorms Not Likely"
      case 10:
        return "Very Stable Conditions"
      case 15:
        return "Very Stable Conditions"
      default:
        return "Error: Wrong value" + value
    }
  }

  pType(value:any){
    switch (value) {
      case "frzr":                  
        return "freezing rain"
      case "icep":                  
        return "ice pellets"
      default:
        return value;
    }
  }

  pAmmount(value:any){
    switch (value) {
      case 0:
        return "None"
      case 1:
        return "Light rain"
      case 2:
        return "Light rain"
      case 3:
        return "Moderate rain"
      case 4:
        return "Moderate rain"
      case 5:
        return "Heavy rain"
      case 6:
        return "Heavy rain"
      case 7:
        return "Heavy rain"
      case 8:
        return "Violent rain"
      case 9:
        return "Violent rain"
      default:
        return "Error: Wrong value" + value
    }
  }
  wSpeed(value:any){
    switch (value) {
      case 1:
          return "Below 0.3m/s (calm)"
      case 2:
          return "0.3-3.4m/s (light)"
      case 3:
          return "3.4-8.0m/s (moderate)"
      case 4:
          return "8.0-10.8m/s (fresh)"
      case 5:
          return "10.8-17.2m/s (strong)"
      case 6:
          return "17.2-24.5m/s (gale)"
      case 7:
          return "24.5-32.6m/s (storm)"
      case 8:
          return "Over 32.6m/s (hurricane)"
    
      default:
        return "Error: Wrong value"
    }
  }
}
