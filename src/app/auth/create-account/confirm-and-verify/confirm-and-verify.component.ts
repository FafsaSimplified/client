import { Component, OnInit } from '@angular/core';
import {CreateAccountService} from '../create-account.service';

@Component({
  selector: 'app-confirm-and-verify',
  templateUrl: './confirm-and-verify.component.html',
  styleUrls: ['./confirm-and-verify.component.scss']
})
export class ConfirmAndVerifyComponent implements OnInit {

  constructor(private createAccountService: CreateAccountService) {
    this.createAccountService.step = 6;
  }

  ngOnInit() {
  }

}
