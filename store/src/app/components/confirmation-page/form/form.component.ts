import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{
  fullName: string = ''
  mailingAddress: string = ''
  eMail: string = ''
  creditCardNumber: string | number = ''

  constructor() {}

  ngOnInit(): void {
    
  }

  onSubmit() {
    console.log(this.fullName)
    console.log(this.mailingAddress)
    console.log(this.eMail)
    console.log(this.creditCardNumber)

  }

}
