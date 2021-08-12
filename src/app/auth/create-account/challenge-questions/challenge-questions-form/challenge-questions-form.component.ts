import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-challenge-questions-form',
  templateUrl: './challenge-questions-form.component.html',
  styleUrls: ['./challenge-questions-form.component.scss']
})
export class ChallengeQuestionsFormComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  async goBack() {
    await this.router.navigate(['/create-account/communication-preferences"']);
  }
}
