import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnInit,
  Renderer2,
  SimpleChanges,
  TemplateRef,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {BsModalRef, BsModalService, ModalDirective} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-blocking-loading-spinner',
  templateUrl: './blocking-loading-spinner.component.html',
  styleUrls: ['./blocking-loading-spinner.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BlockingLoadingSpinnerComponent implements OnInit, OnChanges, AfterViewInit {
  @Input()
  public show: boolean;
  @ViewChild('loadingModal', {static: true}) modal: ModalDirective;

  modalRef: BsModalRef;
  config = {
    keyboard: false,
    ignoreBackdropClick: true,
    class: 'modal-dialog-centered',
    animated: false
  };

  constructor(private modalService: BsModalService, private rd: Renderer2) {
    // this.rd.selectRootElement(this.modal["template"])
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, this.config);
  }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    // this.modalRef = this.modalService.show(this.modal, this.config);
  }

  ngOnChanges(changes: SimpleChanges) {
    // changes.prop contains the old and the new value...
    if (this.show) {
      // console.log('show modal');
      this.modalRef = this.modalService.show(this.modal, this.config);
    } else if (this.modalRef) {
      this.modalRef.hide();
      // this.modal.hide();
    }
  }

  // @Input()
  // public set value(val: string) {
  //   this._value = val;
  //   this.childFunction();
  // }
  // public childFunction(){...}
  showModal() {
    this.modal.show();
  }
}
