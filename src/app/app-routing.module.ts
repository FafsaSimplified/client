import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './layout/home/home.component';
import {LoginPageComponent} from './auth/login-page/login-page.component';
import {LaunchComponent} from './auth/create-account/launch/launch.component';
import {PersonalInfoComponent} from './auth/create-account/personal-info/personal-info.component';
import {AccountInfoComponent} from './auth/create-account/account-info/account-info.component';
import {CreateAccountComponent} from './auth/create-account/create-account.component';
import {ContactInfoComponent} from './auth/create-account/contact-info/contact-info.component';
import {CommunicationPreferencesComponent} from './auth/create-account/communication-preferences/communication-preferences.component';
import {ConfirmAndVerifyComponent} from './auth/create-account/confirm-and-verify/confirm-and-verify.component';
import {ChallengeQuestionsComponent} from './auth/create-account/challenge-questions/challenge-questions.component';
import {VerifyContactInfoComponent} from './auth/create-account/verify-contact-info/verify-contact-info.component';
import {SignUpGuardService} from './shared/services/sign-up-guard.service';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginPageComponent, loadChildren: () => import('./auth/auth.module').then(value => value.AuthModule)},
  {
    path: 'create-account', component: CreateAccountComponent,
    children: [
      {path: '', redirectTo: 'launch', pathMatch: 'full'},
      {path: 'launch', component: LaunchComponent},
      {path: 'personal-info', component: PersonalInfoComponent, canActivate: [SignUpGuardService]},
      {path: 'account-info', component: AccountInfoComponent, canActivate: [SignUpGuardService]},
      {path: 'contact-info', component: ContactInfoComponent, canActivate: [SignUpGuardService]},
      {path: 'communication-preferences', component: CommunicationPreferencesComponent, canActivate: [SignUpGuardService]},
      {path: 'challenge-questions', component: ChallengeQuestionsComponent, canActivate: [SignUpGuardService]},
      {path: 'confirm-verify', component: ConfirmAndVerifyComponent, canActivate: [SignUpGuardService]},
      {path: 'verify-contact-info', component: VerifyContactInfoComponent, canActivate: [SignUpGuardService]},
      {path: '**', redirectTo: 'launch'}
    ],
  },
  { path: 'application', loadChildren: () => import('./application/application.module').then(m => m.ApplicationModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
