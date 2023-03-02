import { Injectable } from '@angular/core';
import User from 'src/app/models/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  buyerInfo!: User

  constructor() { }

  addUserInfo(name: string, mailaddress: string, email: string, creditcard: number | string): void {
    this.buyerInfo.fullName = name
    this.buyerInfo.mailAddress = mailaddress
    this.buyerInfo.eMail = email
    this.buyerInfo.creditCard = creditcard    

    console.log("User service log", this.buyerInfo)
  }
}
