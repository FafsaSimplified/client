import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavigationComponent} from './navigation/navigation.component';
import {CollapseModule} from 'ngx-bootstrap/collapse';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomeComponent} from './home/home.component';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {RouterModule} from '@angular/router';
import {TabsModule} from 'ngx-bootstrap/tabs';
import { InfoTabsComponent } from './info-tabs/info-tabs.component';


@NgModule({
  declarations: [NavigationComponent, HomeComponent, FooterComponent, HeaderComponent, InfoTabsComponent],
  exports: [
    NavigationComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    CollapseModule.forRoot(),
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    RouterModule,
    TabsModule.forRoot()
  ],
  providers: []
})
export class LayoutModule {
}
