import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-step-bar',
  templateUrl: './step-bar.component.html',
  styleUrls: ['./step-bar.component.scss']
})
export class StepBarComponent implements OnInit {

  @Input() steps: number;
  @Input() currentStep: number;
  @Output() currentStepChange = new EventEmitter<number>(true);

  constructor() {
  }

  ngOnInit() {
  }

  counter(steps: number) {
    return Array(parseInt(String(steps), 10)).fill(0);
  }
}
