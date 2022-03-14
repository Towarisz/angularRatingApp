import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeFormatter'
})
export class TimeFormatterPipe implements PipeTransform {

  transform(value: number): string {
    let seconds = value;
    let d = Math.floor(seconds / (3600*24));
    let h = Math.floor(seconds % (3600*24) / 3600);
    let m = Math.floor(seconds % 3600 / 60);
    let s = Math.floor(seconds % 60);

    let dDisplay = d > 0 ? d + (d == 1 ? " day" : " days") : "";
    let hDisplay = h > 0 ? h + (h == 1 ? " hour" : " hours") : "";
    let mDisplay = m > 0 ? m + (m == 1 ? " minute" : " minutes") : "";
    let sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    
    return dDisplay!="" ? dDisplay :( hDisplay!="" ? hDisplay :( mDisplay!="" ?mDisplay : sDisplay));
  }

}
