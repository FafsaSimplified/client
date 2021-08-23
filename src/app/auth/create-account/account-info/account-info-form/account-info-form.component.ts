import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {CreateAccountService} from '../../create-account.service';

@Component({
  selector: 'app-account-info-form',
  templateUrl: './account-info-form.component.html',
  styleUrls: ['./account-info-form.component.scss']
})
export class AccountInfoFormComponent implements OnInit {
  accountInfoForm: FormGroup;

  constructor(private router: Router,
              private fb: FormBuilder,
              private createAccountService: CreateAccountService) {
  }

  ngOnInit() {
    this.initForm();
  }

  async goBack() {
    await this.router.navigate(['/create-account/personal-info']);
  }

  async goNext() {
    console.log('errors', this.accountInfoForm.errors);
    if (this.accountInfoForm.valid) {
      const accountInfo = this.accountInfoForm.value;
      const isValid = await this.createAccountService.validateAccountInfo(accountInfo);
      if (isValid) {
        this.createAccountService.setAccountInfo(accountInfo);
        this.router.navigate(['/create-account/contact-info']).then();
      }
    } else {
      this.createAccountService.setError('Required fields are not provided correctly');
    }
  }

  private initForm() {
    const {username, email, password} = this.createAccountService.signUpDto;
    this.accountInfoForm = this.fb.group({
      username: [username, [Validators.required]],
      email: [email, [Validators.required]],
      confirmEmail: [email, [Validators.required]],
      password: [password, [Validators.required, this.validatePassword()]],
      confirmPassword: [password, [Validators.required]],
    }, {validators: [this.confirmAndValidateEmail, this.confirmAndValidatePassword]});
    this.accountInfoForm.valueChanges.subscribe(value => {
    });
  }

  validatePassword() {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (!value) {
        return null;
      }
      const hasUpperCase = /[A-Z]+/.test(value);
      const hasLowerCase = /[a-z]+/.test(value);
      const hasNumeric = /[0-9]+/.test(value);
      const passwordValid = hasUpperCase && hasLowerCase && hasNumeric;
      const res = !passwordValid ? {passwordStrength: false} : null;
      return !passwordValid ? {
        passwordStrength: {
          hasUpperCase,
          hasLowerCase,
          hasNumeric
        }
      } : null;
    };
  }

  get username() {
    return this.accountInfoForm.get('username');
  }

  get email() {
    return this.accountInfoForm.get('email');
  }

  get confirmEmail() {
    return this.accountInfoForm.get('confirmEmail');
  }

  get password() {
    return this.accountInfoForm.get('password');
  }

  get confirmPassword() {
    return this.accountInfoForm.get('confirmPassword');
  }

  confirmAndValidateEmail(control: AbstractControl): ValidationErrors | null {
    const email = control.get('email');
    const confirmEmail = control.get('confirmEmail');
    if (email.value === confirmEmail.value) {
      return null;
    } else {
      return {emailNotMatch: true};
    }
  }

  confirmAndValidatePassword(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    if (password.value === confirmPassword.value) {
      return null;
    } else {
      return {passwordNotMatch: true};
    }
  }

}
