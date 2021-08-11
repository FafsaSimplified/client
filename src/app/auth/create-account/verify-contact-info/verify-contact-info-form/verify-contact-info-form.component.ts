import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {CreateAccountService} from '../../create-account.service';

@Component({
  selector: 'app-verify-contact-info-form',
  templateUrl: './verify-contact-info-form.component.html',
  styleUrls: ['./verify-contact-info-form.component.scss']
})
export class VerifyContactInfoFormComponent implements OnInit {

  constructor(private router: Router,
              private fb: FormBuilder,
              private createAccountService: CreateAccountService) {
  }

  ngOnInit() {
  }

  createFsaAccount() {
    this.createAccountService.createFsaAccount().subscribe(async value => {
      await this.router.navigate(['/']);
    }, error => {
      console.log('account cannot be created', error);
    });
  }
}
