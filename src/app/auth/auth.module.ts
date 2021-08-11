import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginPageComponent} from './login-page/login-page.component';
import {LoginFormComponent} from './login-form/login-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {LaunchComponent} from './create-account/launch/launch.component';
import {PersonalInfoComponent} from './create-account/personal-info/personal-info.component';
import {LaunchCardComponent} from './create-account/launch/launch-card/launch-card.component';
import {PersonalInfoFormComponent} from './create-account/personal-info/personal-info-form/personal-info-form.component';
import {SharedModule} from '../shared/shared.module';
import {AccountInfoComponent} from './create-account/account-info/account-info.component';
import {AccountInfoFormComponent} from './create-account/account-info/account-info-form/account-info-form.component';
import {CreateAccountComponent} from './create-account/create-account.component';
import {CreateAccountService} from './create-account/create-account.service';
import {ContactInfoComponent} from './create-account/contact-info/contact-info.component';
import {CommunicationPreferencesComponent} from './create-account/communication-preferences/communication-preferences.component';
import {ChallengeQuestionsComponent} from './create-account/challenge-questions/challenge-questions.component';
import {ConfirmAndVerifyComponent} from './create-account/confirm-and-verify/confirm-and-verify.component';
import {VerifyContactInfoComponent} from './create-account/verify-contact-info/verify-contact-info.component';
import {ContactInfoFormComponent} from './create-account/contact-info/contact-info-form/contact-info-form.component';
import {ChallengeQuestionsFormComponent} from './create-account/challenge-questions/challenge-questions-form/challenge-questions-form.component';
import {ConfirmAndVerifyFormComponent} from './create-account/confirm-and-verify/confirm-and-verify-form/confirm-and-verify-form.component';
import {VerifyContactInfoFormComponent} from './create-account/verify-contact-info/verify-contact-info-form/verify-contact-info-form.component';
import {CommunicationPreferencesFormComponent} from './create-account/communication-preferences/communication-preferences-form/communication-preferences-form.component';


@NgModule({
  declarations: [LoginPageComponent, LoginFormComponent, LaunchComponent, PersonalInfoComponent, LaunchCardComponent,
    PersonalInfoFormComponent, AccountInfoComponent, AccountInfoFormComponent, CreateAccountComponent, ContactInfoComponent,
    CommunicationPreferencesComponent, ChallengeQuestionsComponent, ConfirmAndVerifyComponent, VerifyContactInfoComponent,
    ContactInfoFormComponent, CommunicationPreferencesComponent, CommunicationPreferencesFormComponent, ChallengeQuestionsFormComponent,
    ConfirmAndVerifyFormComponent, VerifyContactInfoFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule
  ],
  providers: [CreateAccountService]
})
export class AuthModule {
}
