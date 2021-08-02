import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-question-popover',
  templateUrl: './question-popover.component.html',
  styleUrls: ['./question-popover.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class QuestionPopoverComponent implements OnInit {

  @Input() content: string;

  constructor() {
  }

  ngOnInit() {
  }

}
