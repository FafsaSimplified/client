import {Component, OnInit} from '@angular/core';
import {UserService} from '../../shared/services/user.service';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {User} from '../../shared/models/user';
import {LoginDto} from '../../shared/dto/login-dto';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginDto: LoginDto;
  loginForm: FormGroup;

  constructor(private userService: UserService, private router: Router,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.initForm();
  }

  private setLoginDto(value: { id: string, password: string }) {
    this.loginDto = new LoginDto();
    this.loginDto.id = value.id;
    this.loginDto.password = value.password;
  }

  login(): void {
    if (this.loginForm.get('id').errors && this.loginForm.get('id').errors.required) {
      this.userService.error = true;
      this.userService.errorMessage = 'You must provide a valid response in the "Username, Email, or Phone" field. This field cannot be ' +
        'left blank. Select Help (?) for more details.';
    } else if (this.loginForm.get('password').errors && this.loginForm.get('password').errors.required) {
      this.userService.error = true;
      this.userService.errorMessage = 'You must provide a valid response in the "Password" field. This field cannot be ' +
        'left blank. Select Help (?) for more details.';
    } else if (this.loginForm.get('id').valid) {
      this.userService.error = false;
      console.log('attempt login in....');
      this.userService.loading = true;
      this.userService.login(this.loginDto)
        .subscribe(value => {
          console.log(value);
          this.userService.error = false;
          this.userService.loading = false;
          this.userService.user = value;
          this.userService.isLoggedIn = true;
          this.router.navigate(['/']).then();
        }, error => {
          this.userService.error = true;
          this.userService.loading = false;
          try {
            console.log('error', error);
            console.log('error message', error.error.message);
            this.userService.errorMessage = error.error.message;
          } catch (err) {
          }
        }, () => {
          console.log('log in done');
          this.userService.loading = false;
        });
    }
  }

  initForm(): void {
    this.loginForm = this.fb.group({
      id: ['', [Validators.required, this.validateId()]],
      password: ['', [Validators.required]]
    });
    this.loginForm.valueChanges.subscribe(value => {
      this.setLoginDto(value);
    });
  }

  get id() {
    return this.loginForm.get('id');
  }

  get password() {
    return this.loginForm.get('password');
  }

  validateId() {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (!value) {
        return null;
      }
      return null;
    };
  }
}
