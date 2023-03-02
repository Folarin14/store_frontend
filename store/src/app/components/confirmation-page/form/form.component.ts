import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

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

  constructor(private user:UserService) {}

  ngOnInit(): void {
    
  }

  onSubmit() {
    this.user.buyerInfo.fullName = this.fullName
    this.user.buyerInfo.mailAddress = this.mailingAddress
    this.user.buyerInfo.eMail = this.eMail
    this.user.buyerInfo.creditCard = this.creditCardNumber

    console.log(this.fullName)
    console.log(this.mailingAddress)
    console.log(this.eMail)
    console.log(this.creditCardNumber)
    console.log(this.user.showUserInfo())

  }

}
