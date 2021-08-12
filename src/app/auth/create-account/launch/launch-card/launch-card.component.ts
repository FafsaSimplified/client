import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CreateAccountService} from '../../create-account.service';

@Component({
  selector: 'app-launch-card',
  templateUrl: './launch-card.component.html',
  styleUrls: ['./launch-card.component.scss']
})
export class LaunchCardComponent implements OnInit {

  constructor(private router: Router, private createAccountService: CreateAccountService) {
  }

  ngOnInit() {
  }

  getStarted() {
    this.createAccountService.init();
    this.router.navigate(['/create-account/personal-info'])
      .then();
  }
}
