import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CreateAccountService} from '../../create-account.service';

@Component({
  selector: 'app-confirm-and-verify-form',
  templateUrl: './confirm-and-verify-form.component.html',
  styleUrls: ['./confirm-and-verify-form.component.scss']
})
export class ConfirmAndVerifyFormComponent implements OnInit {
  confirmForm: FormGroup;
  siteKey = '6LciIwwcAAAAAPiaq_NBd9IRRiTM4V_ed7yWdih4';

  constructor(private router: Router,
              private fb: FormBuilder,
              private createAccountService: CreateAccountService) {
  }

  ngOnInit() {
    this.initForm();
  }

  async goBack() {
    await this.router.navigate(['/create-account/challenge-questions']);
  }

  private initForm() {
    this.confirmForm = this.fb.group({
      recaptcha: ['', [Validators.required]],
    });
    this.confirmForm.valueChanges.subscribe(value => {
    });
  }
}
