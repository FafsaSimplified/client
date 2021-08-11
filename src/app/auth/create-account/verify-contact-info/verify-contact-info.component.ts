import {Component, OnInit} from '@angular/core';
import {CreateAccountService} from '../create-account.service';

@Component({
  selector: 'app-verify-contact-info',
  templateUrl: './verify-contact-info.component.html',
  styleUrls: ['./verify-contact-info.component.scss']
})
export class VerifyContactInfoComponent implements OnInit {

  constructor(private createAccountService: CreateAccountService) {
    this.createAccountService.step = 7;
  }

  ngOnInit() {
  }

}
