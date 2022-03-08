import { UserDataService } from './../user-data.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent{
  @Input() username!:string;
  @Input() nickname!:string;
  @Input() phoneNumber!:string;
  @Input() adress!:string;
  @Input() emailAdress!:string;
  _userData:UserDataService;
  constructor(userData:UserDataService) { 
    this._userData = userData;
      this.username = userData.data.username
      this.nickname = userData.data.nickname
      this.phoneNumber = userData.data.phoneNumber
      this.adress = userData.data.adress
      this.emailAdress = userData.data.emailAdress
  } 

  save(event: any){   
    this._userData.setParam(event.target.name,event.target.value)
  }

}
