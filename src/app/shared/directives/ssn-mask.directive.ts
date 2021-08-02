import {Directive, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appSsnMask]'
})
export class SsnMaskDirective {
  @Input() ssn: number;

  constructor() {
  }


  @HostListener('input', ['$event'])
  onChange(event) {
    const target = event.target as HTMLInputElement;
    // console.log('ssn is changed', target.value, event.key, this.ssn);
    this.format(target, event.key);
  }

  format(target: HTMLInputElement, newValue: string) {
    let val = target.value.replace(/\D/g, '');
    if (val.length > 9) {
      val = val.substr(0, 9);
    }
    if (val.length >= 6) {
      let newVal = val.substr(0, 5);
      newVal += '-';
      newVal += val.substr(5);
      val = newVal;
    }
    if (val.length >= 4) {
      let newVal = val.substr(0, 3);
      newVal += '-';
      newVal += val.substr(3);
      val = newVal;
    }
    target.value = val;
  }

  // @HostListener('keydown.backspace', ['$event'])
  // onDelete(event) {
  //   console.log('ssn is deleted');
  // }

  // @HostListener('keydown', ['$event'])
  // onChange(event) {
  //   const target = event.target as HTMLInputElement;
  //   console.log('ssn is changed', target.value, event.key, this.ssn);
  //   this.format(target, event.key);
  // }
}
