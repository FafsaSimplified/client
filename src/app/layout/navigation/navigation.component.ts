import {Component, OnInit} from '@angular/core';
import {UserService} from '../../shared/services/user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  isCollapsed = true;

  constructor(public userService: UserService) {
  }

  ngOnInit() {
  }

  logout() {

  }
}
