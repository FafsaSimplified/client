import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ApplicationComponent} from './application.component';
import {CompfComponent} from './compf/compf.component';
import {CompsComponent} from './comps/comps.component';

const routes: Routes = [
  {
    path: '', component: ApplicationComponent,
    children: [
      {path: '1', component: CompfComponent},
      {path: '2', component: CompsComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule {
}
