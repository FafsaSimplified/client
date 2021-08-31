import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LayoutModule} from './layout/layout.module';
import {SharedModule} from './shared/shared.module';
import {AuthModule} from './auth/auth.module';
// import {IconButtonComponent} from './shared/components/icon-button/icon-button.component';

@NgModule({
  declarations: [
    AppComponent,
    // IconButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    SharedModule,
    AuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  // exports: [IconButtonComponent]
})
export class AppModule {
}
