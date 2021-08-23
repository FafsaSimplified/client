import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {CreateAccountService} from '../../create-account.service';
import {UserService} from '../../../../shared/services/user.service';

@Component({
  selector: 'app-verify-contact-info-form',
  templateUrl: './verify-contact-info-form.component.html',
  styleUrls: ['./verify-contact-info-form.component.scss']
})
export class VerifyContactInfoFormComponent implements OnInit {

  constructor(private router: Router,
              private fb: FormBuilder,
              private createAccountService: CreateAccountService,
              private userService: UserService) {
  }

  ngOnInit() {
  }

  async goBack() {
    await this.router.navigate(['/create-account/personal-info']);
  }

  async createFsaAccount() {
    const user = await this.createAccountService.createFsaAccount();
    if (user) {
      this.userService.setUser(user);
      this.router.navigate(['/']).then(value => {
      });
    }
    // const user = await this.createAccountService.createFsaAccountTest();
    // if (user) {
    //   this.userService.setUser(user);
    //   console.log('creat account loading:', this.createAccountService.loading);
    //   this.router.navigate(['/']).then(value => {
    //     console.log('creat account loading:', this.createAccountService.loading);
    //   });
    // }
  }
}
