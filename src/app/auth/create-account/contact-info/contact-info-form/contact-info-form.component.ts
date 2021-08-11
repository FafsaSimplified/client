import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
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
    this.contactInfoForm = this.fb.group({
      streetAddress: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      zipCode: ['', [Validators.required]],
      cellPhone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      confirmCellPhone: ['', [Validators.required]],
      smsOptIn: [false, []],
    });
    this.contactInfoForm.valueChanges.subscribe(value => {
    });
  }

}
