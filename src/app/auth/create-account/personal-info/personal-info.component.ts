import {Component, OnInit} from '@angular/core';
import {CreateAccountService} from '../create-account.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {
  constructor(private createAccountService: CreateAccountService) {
    this.createAccountService.step = 1;
  }

  ngOnInit() {
  }
}
