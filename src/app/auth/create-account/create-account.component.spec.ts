import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import {CreateAccountComponent} from './create-account.component';
import {CreateAccountService} from './create-account.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import {NgxCaptchaModule} from 'ngx-captcha';
import {LoginPageComponent} from '../login-page/login-page.component';
import {LoginFormComponent} from '../login-form/login-form.component';
import {LaunchComponent} from './launch/launch.component';
import {PersonalInfoComponent} from './personal-info/personal-info.component';
import {LaunchCardComponent} from './launch/launch-card/launch-card.component';
import {PersonalInfoFormComponent} from './personal-info/personal-info-form/personal-info-form.component';
import {AccountInfoComponent} from './account-info/account-info.component';
import {AccountInfoFormComponent} from './account-info/account-info-form/account-info-form.component';
import {ContactInfoComponent} from './contact-info/contact-info.component';
import {CommunicationPreferencesComponent} from './communication-preferences/communication-preferences.component';
import {ChallengeQuestionsComponent} from './challenge-questions/challenge-questions.component';
import {ConfirmAndVerifyComponent} from './confirm-and-verify/confirm-and-verify.component';
import {VerifyContactInfoComponent} from './verify-contact-info/verify-contact-info.component';
import {ContactInfoFormComponent} from './contact-info/contact-info-form/contact-info-form.component';
import {CommunicationPreferencesFormComponent} from './communication-preferences/communication-preferences-form/communication-preferences-form.component';
import {ChallengeQuestionsFormComponent} from './challenge-questions/challenge-questions-form/challenge-questions-form.component';
import {ConfirmAndVerifyFormComponent} from './confirm-and-verify/confirm-and-verify-form/confirm-and-verify-form.component';
import {VerifyContactInfoFormComponent} from './verify-contact-info/verify-contact-info-form/verify-contact-info-form.component';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

describe('CreateAccountComponent', () => {
  let component: CreateAccountComponent;
  let fixture: ComponentFixture<CreateAccountComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CreateAccountComponent,
        LoginPageComponent, LoginFormComponent, LaunchComponent, PersonalInfoComponent, LaunchCardComponent,
        PersonalInfoFormComponent, AccountInfoComponent, AccountInfoFormComponent, CreateAccountComponent, ContactInfoComponent,
        CommunicationPreferencesComponent, ChallengeQuestionsComponent, ConfirmAndVerifyComponent, VerifyContactInfoComponent,
        ContactInfoFormComponent, CommunicationPreferencesComponent, CommunicationPreferencesFormComponent, ChallengeQuestionsFormComponent,
        ConfirmAndVerifyFormComponent, VerifyContactInfoFormComponent],
      imports: [
        ReactiveFormsModule,
        RouterModule.forRoot([]),
        SharedModule,
        NgxCaptchaModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    de = fixture.debugElement;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
  it('should have all components', () => {
    expect(de.nativeElement.querySelector('app-step-bar')).toBeTruthy();
    expect(de.nativeElement.querySelector('app-error-toast')).toBeTruthy();
    expect(de.nativeElement.querySelector('app-blocking-loading-spinner')).toBeTruthy();
  });
  it('', fakeAsync(() => {
    tick(500);
  }));
});
