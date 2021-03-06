import {Component, OnInit} from '@angular/core';
import {CreateAccountService} from '../create-account.service';

@Component({
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.scss']
})
export class LaunchComponent implements OnInit {

  constructor(private createAccountService: CreateAccountService) {
    this.createAccountService.step = 0;
  }

  ngOnInit() {
  }

}
