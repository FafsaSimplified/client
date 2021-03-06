import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CreateAccountService} from '../../create-account.service';

@Component({
  selector: 'app-personal-info-form',
  templateUrl: './personal-info-form.component.html',
  styleUrls: ['./personal-info-form.component.scss']
})
export class PersonalInfoFormComponent implements OnInit {
  personalInfoForm: FormGroup;

  constructor(private router: Router,
              private fb: FormBuilder,
              private createAccountService: CreateAccountService) {
  }

  ngOnInit() {
    this.initForm();
  }

  async goToNext() {
    if (this.personalInfoForm.valid) {
      const personalInfo = this.personalInfoForm.value;
      const isValid = await this.createAccountService.validatePersonalInfo(personalInfo);
      if (isValid) {
        this.createAccountService.setPersonalInfo(personalInfo);
        this.router.navigate(['/create-account/account-info']).then();
        console.log('finally here', this.personalInfoForm.value);
      }
    } else {
      console.log('here', this.personalInfoForm.value);
      console.log(this.personalInfoForm.get('day').errors);
      this.createAccountService.setError('Required fields are not provided correctly');
    }
  }

  private initForm() {
    const {firstName, middleName, lastName, dob, ssn} = this.createAccountService.signUpDto;
    let month = null;
    let day = null;
    let year = null;
    try {
      const dobParsed = new Date(dob);
      day = dobParsed.getUTCDate();
      month = dobParsed.getUTCMonth() + 1;
      year = dobParsed.getUTCFullYear();
    } catch (err) {
    }
    this.personalInfoForm = this.fb.group({
      firstName: [firstName, [Validators.required]],
      middleName: [middleName, [Validators.required]],
      lastName: [lastName, [Validators.required]],
      month: [month, [Validators.required, Validators.min(1), Validators.max(12)]],
      day: [day, [Validators.required, Validators.min(1), Validators.max(31)]],
      year: [year, [Validators.required]],
      ssn: [ssn, [Validators.required]],
    });
    this.personalInfoForm.valueChanges.subscribe(value => {
      value.ssn = value.ssn.replace(/\D/g, '');
    });
  }

  get firstName() {
    return this.personalInfoForm.get('firstName');
  }

  get lastName() {
    return this.personalInfoForm.get('lastName');
  }

  get middleName() {
    return this.personalInfoForm.get('middleName');
  }

  get month() {
    return this.personalInfoForm.get('month');
  }

  get day() {
    return this.personalInfoForm.get('day');
  }

  get year() {
    return this.personalInfoForm.get('year');
  }

  get ssn() {
    return this.personalInfoForm.get('ssn');
  }
}
