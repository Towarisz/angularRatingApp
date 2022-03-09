import { ContactService } from './../contact.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us-page',
  templateUrl: './contact-us-page.component.html',
  styleUrls: ['./contact-us-page.component.scss']
})
export class ContactUsPageComponent {
  data:any = {};
  constructor(contact:ContactService) {
    this.data.selValue="genQuestion";
    this.data.topValue="";
    this.data.desValue="";
   }

  ngOnInit(): void {
  }
  send(x:any){x.preventDefault(); console.log(this.data);
  }
  select(x:any){this.data.selValue=x.target.value}
  topic(x:any){this.data.topValue=x.target.value}
  text(x:any){this.data.desValue=x.target.value}
}
