import { Injectable } from '@angular/core';
import User from 'src/app/models/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  buyerInfo: User = {
    fullName: '',
    mailAddress: '',
    eMail: '',
    creditCard: ''
  }

  constructor() {
    console.log(this.buyerInfo)
   }

  showUserInfo(): void {
    console.log("User service log", this.buyerInfo)
  }
}
