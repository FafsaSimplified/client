import {Injectable} from '@angular/core';
import {User} from '../../shared/models/user';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {SignupDto} from '../../shared/dto/signup-dto';

@Injectable({
  providedIn: 'root'
})
export class CreateAccountService {
  step = 0;
  user: User;
  private error: boolean;
  private errorMessage: string;
  url = environment.authApiUrl;
  signUpDto: SignupDto;

  constructor(private httpClient: HttpClient) {
  }

  public checkEmailValid(signupDto: SignupDto): Observable<boolean> {
    return this.httpClient.post<boolean>(`${this.url}/registration/checkEmail`, signupDto);
  }

  public checkUsernameValid(signupDto: SignupDto): Observable<boolean> {
    return this.httpClient.post<boolean>(`${this.url}/registration/checkUsername`, signupDto);
  }

  public checkSsnValid(signupDto: SignupDto): Observable<boolean> {
    return this.httpClient.post<boolean>(`${this.url}/registration/checkSsn`, signupDto);
  }

  public checkDobValid(signupDto: SignupDto): Observable<boolean> {
    return this.httpClient.post<boolean>(`${this.url}/registration/checkDob`, signupDto);
  }

  public register(signupDto: SignupDto): Observable<User> {
    return this.httpClient.post<User>(`${this.url}/registration/register`, signupDto);
  }


  public setError(value: string) {
    this.error = true;
    this.errorMessage = value;
  }

  public unsetError(value: string) {
    this.error = false;
    this.errorMessage = '';
  }


  private setDate(year: number, month: number, day: number): string {
    // dobDto.dob = `${personalInfo.year}-${personalInfo.month}-${personalInfo.day}`;
    const dob = new Date(year, month, day);
    return dob.toISOString().substr(0, 10);
  }

  async validatePersonalInfo(personalInfo: {
    firstName: string, middleName: string, lastName: string,
    month: number, day: number, year: number, ssn: string
  }): Promise<boolean> {
    const {ssn, day, month, year} = personalInfo;
    let dto = new SignupDto();
    dto.dob = this.setDate(year, month, day);
    dto.ssn = ssn;
    const dobValid = await this.checkDobValid(dto).toPromise();
    dto = new SignupDto();
    dto.ssn = ssn;
    const ssnValid = await this.checkSsnValid(dto).toPromise();
    if (!dobValid) {
      this.setError('dob is not valid');
    }
    if (!ssnValid) {
      this.setError('ssn is not valid');
    }
    return ssnValid && dobValid;
  }

  async validateAccountInfo(accountInfo: {
    userName: string, email: string, password: string,
  }): Promise<boolean> {
    const {userName, email, password} = accountInfo;
    return true;
  }

  async validateContactInfo(contactInfo: {
    streetAddress: string, city: string, state: string,
    zipCode: string, cellPhone: string
  }): Promise<boolean> {
    const {
      streetAddress, city, state, zipCode, cellPhone
    } = contactInfo;
    return true;
  }

  setPersonalInfo(personalInfo: {
    firstName: string, middleName: string, lastName: string,
    month: number, day: number, year: number, ssn: string
  }) {
    this.signUpDto = new SignupDto();
    this.signUpDto.firstName = personalInfo.firstName;
    this.signUpDto.middleName = personalInfo.middleName;
    this.signUpDto.lastName = personalInfo.lastName;
    this.signUpDto.ssn = personalInfo.ssn;
    this.signUpDto.dob = this.setDate(personalInfo.year, personalInfo.month, personalInfo.day);
    console.log(this.signUpDto);
  }

  setAccountInfo(accountInfo: {
    username: string, email: string, password: string,
  }) {
    const {username, email, password} = accountInfo;
    this.signUpDto.username = username;
    this.signUpDto.email = email;
    this.signUpDto.password = password;
    console.log(this.signUpDto);
  }

  setContactInfo(contactInfo: {
    streetAddress: string, city: string, state: string,
    zipCode: string, cellPhone: string
  }) {
    const {
      streetAddress, city, state, zipCode, cellPhone
    } = contactInfo;
    this.signUpDto.streetAddress = streetAddress;
    this.signUpDto.city = city;
    this.signUpDto.state = state;
    this.signUpDto.zipCode = zipCode;
    this.signUpDto.cellPhone = cellPhone;
    this.signUpDto.language = 'EN';
    this.signUpDto.smsOptIn = true;
    console.log(this.signUpDto);
  }

  createFsaAccount(): Observable<User> {
    return this.register(this.signUpDto);
  }
}
