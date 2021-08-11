import {Component, OnInit} from '@angular/core';
import {CreateAccountService} from './create-account.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  constructor(public createAccountService: CreateAccountService) {
    this.createAccountService.step = 0;
  }

  ngOnInit() {
  }

}
