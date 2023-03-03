import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
  @Input() cashSpent = ''

  constructor(private user:UserService, private router: Router, private activatedroute:ActivatedRoute) {}

  ngOnInit(): void {
    
  }

  onSubmit() {
    this.user.buyerInfo.fullName = this.fullName
    this.user.buyerInfo.mailAddress = this.mailingAddress
    this.user.buyerInfo.eMail = this.eMail
    this.user.buyerInfo.creditCard = this.creditCardNumber
    this.user.buyerInfo.cashSpent = this.cashSpent

    console.log(this.fullName)
    console.log(this.mailingAddress)
    console.log(this.eMail)
    console.log(this.creditCardNumber)
    console.log(this.cashSpent)
    console.log(this.user.showUserInfo())

    this.router.navigate(['confirmation'], {relativeTo: this.activatedroute})
  }

}
