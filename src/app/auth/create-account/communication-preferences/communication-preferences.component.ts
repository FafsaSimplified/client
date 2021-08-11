import { Component, OnInit } from '@angular/core';
import {CreateAccountService} from '../create-account.service';

@Component({
  selector: 'app-communication-preferences',
  templateUrl: './communication-preferences.component.html',
  styleUrls: ['./communication-preferences.component.scss']
})
export class CommunicationPreferencesComponent implements OnInit {

  constructor(private createAccountService: CreateAccountService) {
    this.createAccountService.step = 4;
  }

  ngOnInit() {
  }

}
