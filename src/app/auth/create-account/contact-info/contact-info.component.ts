import {Component, OnInit} from '@angular/core';
import {CreateAccountService} from '../create-account.service';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss']
})
export class ContactInfoComponent implements OnInit {

  constructor(private createAccountService: CreateAccountService) {
    this.createAccountService.step = 3;
  }

  ngOnInit() {
  }

}
