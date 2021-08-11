import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { ErrorToastComponent } from './components/error-toast/error-toast.component';
import { BlockingLoadingSpinnerComponent } from './components/blocking-loading-spinner/blocking-loading-spinner.component';
import {ModalModule} from 'ngx-bootstrap/modal';
import { QuestionPopoverComponent } from './components/question-popover/question-popover.component';
import {PopoverModule} from 'ngx-bootstrap/popover';
import { IconButtonComponent } from './components/icon-button/icon-button.component';
import { SsnMaskDirective } from './directives/ssn-mask.directive';
import { StepBarComponent } from './components/step-bar/step-bar.component';
import { FieldErrorComponent } from './components/field-error/field-error.component';


@NgModule({
  declarations: [LoadingSpinnerComponent, ErrorToastComponent, BlockingLoadingSpinnerComponent, QuestionPopoverComponent, IconButtonComponent, SsnMaskDirective, StepBarComponent, FieldErrorComponent],
  exports: [
    LoadingSpinnerComponent,
    BlockingLoadingSpinnerComponent,
    ErrorToastComponent,
    QuestionPopoverComponent,
    SsnMaskDirective,
    StepBarComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ModalModule.forRoot(),
    PopoverModule.forRoot()
  ]
})
export class SharedModule {
}
