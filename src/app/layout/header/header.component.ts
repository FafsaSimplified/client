import {Component, OnInit} from '@angular/core';
import {UserService} from '../../shared/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public userService: UserService) {
  }

  ngOnInit() {
  }

  login(): void {
    this.userService.login(null);
  }

}
