import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-confirm-and-verify-form',
  templateUrl: './confirm-and-verify-form.component.html',
  styleUrls: ['./confirm-and-verify-form.component.scss']
})
export class ConfirmAndVerifyFormComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  async goBack() {
    await this.router.navigate(['/create-account/challenge-questions']);
  }
}
