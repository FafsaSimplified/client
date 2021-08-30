import {Component, OnInit} from '@angular/core';
import {UserService} from '../../shared/services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  isCollapsed = true;

  constructor(public userService: UserService, private router: Router) {
  }

  ngOnInit() {
  }

//   this.authService.logout(environment.sessionInfoUrl)
// .subscribe(res => {
//   this.authService.isLoggedIn = false;
//   this.router.navigate(['/home']).then(() => console.log('redirect to dashboard'));
// }, error => {
//   console.log('something went wrong');
// });
  logout() {
    this.userService.logout().subscribe(res => {
      this.userService.isLoggedIn = false;
      this.router.navigate(['/home']).then();

    }, error => {
      console.log('logging out failed');
    });
  }
}
