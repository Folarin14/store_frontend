import { Injectable } from '@angular/core';
import User from 'src/app/models/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  buyerInfo!: User

  constructor() { }

  // addUserInfo() {

  // }
}
