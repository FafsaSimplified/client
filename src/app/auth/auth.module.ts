import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginPageComponent} from './login-page/login-page.component';
import {LoginFormComponent} from './login-form/login-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {LaunchComponent} from './create-account/launch/launch.component';
import {PersonalInfoComponent} from './create-account/personal-info/personal-info.component';
import { LaunchCardComponent } from './create-account/launch/launch-card/launch-card.component';
import { PersonalInfoFormComponent } from './create-account/personal-info/personal-info-form/personal-info-form.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [LoginPageComponent, LoginFormComponent, LaunchComponent, PersonalInfoComponent, LaunchCardComponent, PersonalInfoFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule
  ]
})
export class AuthModule {
}
