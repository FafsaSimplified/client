import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationRoutingModule } from './application-routing.module';
import { ApplicationComponent } from './application.component';
import { CompfComponent } from './compf/compf.component';
import { CompsComponent } from './comps/comps.component';
import {AuthModule} from '../auth/auth.module';


@NgModule({
  declarations: [ApplicationComponent, CompfComponent, CompsComponent],
  imports: [
    CommonModule,
    ApplicationRoutingModule,
    AuthModule
  ]
})
export class ApplicationModule { }
