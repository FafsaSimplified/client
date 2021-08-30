import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../models/user';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {LoginDto} from '../dto/login-dto';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isLoggedIn = false;
  loading = false;
  error = false;
  errorMessage: string;
  user: User;
  url = environment.authApiUrl;

  constructor(private httpClient: HttpClient) {
  }

  public login(userLogin: LoginDto): Observable<User> {
    console.log('Attempt login...');
    return this.httpClient.post<User>(`${this.url}/authenticate`, userLogin);
  }

  public logout(): Observable<any> {
    console.log('Attempt logout...');
    return this.httpClient.delete(`${this.url}/logout`);
  }

  setUser(user: User) {
    this.isLoggedIn = true;
    this.user = user;
    this.loading = false;
  }
}
