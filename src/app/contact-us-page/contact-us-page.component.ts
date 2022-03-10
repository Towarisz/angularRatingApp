import { ContactService } from './../contact.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us-page',
  templateUrl: './contact-us-page.component.html',
  styleUrls: ['./contact-us-page.component.scss']
})
export class ContactUsPageComponent {
  data:any = {};
  _contact:ContactService;
  constructor(contact:ContactService) {
    this._contact = contact
   }

  ngOnInit(): void {
  }

  send(x:any){x.preventDefault(); this._contact.data=this.data;this.clearForm()}

  clearForm(){
    this.data.selValue="";
    this.data.topValue="";
    this.data.desValue="";
  }
}
