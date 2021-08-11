import {Component, OnInit} from '@angular/core';
import {CreateAccountService} from '../create-account.service';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.scss']
})
export class AccountInfoComponent implements OnInit {

  constructor(private createAccountService: CreateAccountService) {
    this.createAccountService.step = 2;
  }

  ngOnInit() {
  }

}
