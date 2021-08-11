import { Component, OnInit } from '@angular/core';
import {CreateAccountService} from '../create-account.service';

@Component({
  selector: 'app-challenge-questions',
  templateUrl: './challenge-questions.component.html',
  styleUrls: ['./challenge-questions.component.scss']
})
export class ChallengeQuestionsComponent implements OnInit {

  constructor(private createAccountService: CreateAccountService) {
    this.createAccountService.step = 5;
  }

  ngOnInit() {
  }

}
