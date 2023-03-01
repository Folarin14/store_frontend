import { Component, OnInit} from '@angular/core';
import User from 'src/app/models/users';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-confirmation-page',
  templateUrl: './confirmation-page.component.html',
  styleUrls: ['./confirmation-page.component.css']
})
export class ConfirmationPageComponent implements OnInit {
  user!: User
  constructor(private userInfo: UserService) {}

  ngOnInit(): void {
    // console.log(this.userInfo.buyerInfo)
  }

  addUser() {
    this.user = this.userInfo.buyerInfo
  }
}
