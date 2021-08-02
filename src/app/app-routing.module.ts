import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './layout/home/home.component';
import {LoginPageComponent} from './auth/login-page/login-page.component';
import {LaunchComponent} from './auth/create-account/launch/launch.component';
import {PersonalInfoComponent} from './auth/create-account/personal-info/personal-info.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'create-account', redirectTo: 'create-account/launch'},
  {path: 'create-account/launch', component: LaunchComponent},
  {path: 'create-account/personal-info', component: PersonalInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
