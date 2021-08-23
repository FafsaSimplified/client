import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {CreateAccountService} from '../../create-account.service';

@Component({
  selector: 'app-contact-info-form',
  templateUrl: './contact-info-form.component.html',
  styleUrls: ['./contact-info-form.component.scss']
})
export class ContactInfoFormComponent implements OnInit {
  contactInfoForm: FormGroup;

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

  async goToNext() {
    if (this.contactInfoForm.valid) {
      const accountInfo = this.contactInfoForm.value;
      const isValid = await this.createAccountService.validateContactInfo(accountInfo);
      if (isValid) {
        this.createAccountService.setContactInfo(accountInfo);
        this.router.navigate(['/create-account/communication-preferences']).then();
      }
    } else {
      this.createAccountService.setError('Required fields are not provided correctly');
    }
  }

  private initForm() {
    const {streetAddress, city, state, zipCode, cellPhone, smsOptIn} = this.createAccountService.signUpDto;


    this.contactInfoForm = this.fb.group({
      streetAddress: [streetAddress, [Validators.required]],
      city: [city, [Validators.required]],
      state: [state, [Validators.required]],
      zipCode: [zipCode, [Validators.required]],
      cellPhone: [cellPhone, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      confirmCellPhone: ['', [Validators.required]],
      smsOptIn: [smsOptIn, []],
    }, {validators: [this.confirmPhoneNumber]});
    this.contactInfoForm.valueChanges.subscribe(value => {
      value.cellPhone = value.cellPhone.replace(/\D/g, '');
      value.confirmCellPhone = value.confirmCellPhone.replace(/\D/g, '');
    });
  }

  confirmPhoneNumber(control: AbstractControl): ValidationErrors | null {
    const phone = control.get('cellPhone');
    const cPhone = control.get('confirmCellPhone');
    if (phone.value === cPhone.value) {
      return null;
    } else {
      return {phoneNotMatch: true};
    }
  }

  format(target: HTMLInputElement, newValue: string) {
    let val = target.value.replace(/\D/g, '');
    if (val.length > 10) {
      val = val.substr(0, 10);
    }
    if (val.length > 6) {
      let newVal = val.substr(0, 6);
      newVal += '-';
      newVal += val.substr(6);
      val = newVal;
    }
    if (val.length > 3 || (val.length === 3 && newValue)) {
      let newVal = val.substr(0, 3);
      newVal += ') ';
      newVal += val.substr(3);
      val = newVal;
    }

    if (val.length >= 1) {
      let newVal = '(';
      newVal += val;
      val = newVal;
    }
    target.value = val;
  }

  // maskPhone($event: KeyboardEvent) {
  //   const target = $event.target as HTMLInputElement;
  //   this.format(target, $event.key);
  // }
  maskPhone($event: Event) {
    const target = $event.target as HTMLInputElement;
    this.format(target, $event['data']);
  }
}
