import {AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild} from '@angular/core';

@Component({
  selector: 'app-error-toast',
  templateUrl: './error-toast.component.html',
  styleUrls: ['./error-toast.component.scss']
})
export class ErrorToastComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() message: string;
  @ViewChild('toastElement', {static: false}) toast;
  @Input() show: boolean;
  @Output() showChange = new EventEmitter<boolean>(true);
  // @Input() set show(val: boolean) {
  //   this._show = val;
  // }

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('toast changes', this.toast, this.show);
    if (this.show) {
      this.autoHide();
    }
  }

  ngAfterViewInit(): void {
    console.log('toast', this.toast);
  }

  autoHide(): void {
    setTimeout(() => {
      this.showChange.emit(false);
    }, 3000);
  }

  hide() {
    this.showChange.emit(false);
  }
}
