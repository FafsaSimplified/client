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
  error: boolean;
  errorMessage: string;
  url = environment.authApiUrl;
  signUpDto: SignupDto;
  loading = false;
  activated = false;

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
    const dob = new Date(year, month - 1, day);
    console.log('dob is', dob.toISOString(), dob.toUTCString(), dob.toDateString());
    return dob.toISOString().substr(0, 10);
    // return dob.toISOString();
  }

  async validatePersonalInfo(personalInfo: {
    firstName: string, middleName: string, lastName: string,
    month: number, day: number, year: number, ssn: string
  }): Promise<boolean> {
    let dobValid = false;
    let ssnValid = false;
    this.loading = true;
    try {
      const {ssn, day, month, year} = personalInfo;
      let dto = new SignupDto();
      dto.dob = this.setDate(year, month, day);
      dto.ssn = ssn;
      dobValid = await this.checkDobValid(dto).toPromise();
      dto = new SignupDto();
      dto.ssn = ssn;
      ssnValid = await this.checkSsnValid(dto).toPromise();
      if (!dobValid) {
        this.setError('dob is not valid');
      }
      if (!ssnValid) {
        this.setError('ssn is not valid');
      }
    } catch (err) {
      this.setError(err.message);
    }
    this.loading = false;
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
    this.loading = true;
    this.signUpDto.firstName = personalInfo.firstName;
    this.signUpDto.middleName = personalInfo.middleName;
    this.signUpDto.lastName = personalInfo.lastName;
    this.signUpDto.ssn = personalInfo.ssn;
    this.signUpDto.dob = this.setDate(personalInfo.year, personalInfo.month, personalInfo.day);
    this.loading = false;
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
    zipCode: string, cellPhone: string, smsOptIn: boolean
  }) {
    const {
      streetAddress, city, state, zipCode, cellPhone, smsOptIn
    } = contactInfo;
    this.signUpDto.streetAddress = streetAddress;
    this.signUpDto.city = city;
    this.signUpDto.state = state;
    this.signUpDto.zipCode = zipCode;
    this.signUpDto.cellPhone = cellPhone;
    this.signUpDto.language = 'EN';
    this.signUpDto.smsOptIn = smsOptIn;
  }

  async createFsaAccount(): Promise<User> {
    this.loading = true;
    let user: User = null;
    try {
      user = await this.register(this.signUpDto).toPromise();
    } catch (error) {
      const message = (error.error.message) ? error.error.message : error.error;
      this.setError(message);
    } finally {
      this.loading = false;
    }
    return user;
  }

  async createFsaAccountTest(): Promise<User> {
    this.loading = true;
    let user: User = null;
    let signUp = new SignupDto();
    signUp = {
      ssn: '286983684', city: 'fewfef', zipCode: '33434', smsOptIn: true,
      state: 'VA', email: 'fewlajhfeljlfajwelf@weami.com', cellPhone: '2938395939',
      password: 'klfhawkehfkhekflahKFFKEKHFE334', dob: '2000-02-02',
      streetAddress: 'fewljkfel fkehwfklewlkfnakelflnakl kefw',
      lastName: 'fewflkehf', firstName: 'fewljflefew', middleName: 'f',
      username: 'fewhfklawenflew32343', language: 'EN'
    };
    try {
      user = await this.register(signUp).toPromise();
    } catch (error) {
      const message = (error.error.message) ? error.error.message : error.error;
      this.setError(message);
    } finally {
      this.loading = false;
    }
    return user;
  }


  init() {
    this.signUpDto = new SignupDto();
    this.signUpDto.firstName = '';
    this.signUpDto.middleName = '';
    this.signUpDto.lastName = '';
    this.signUpDto.dob = '';
    this.signUpDto.ssn = '';
    this.signUpDto.smsOptIn = false;
    this.signUpDto.language = 'EN';
    this.signUpDto.cellPhone = '';
    this.signUpDto.email = '';
    this.signUpDto.password = '';
    this.signUpDto.username = '';
    this.signUpDto.streetAddress = '';
    this.signUpDto.city = '';
    this.signUpDto.state = '';
    this.signUpDto.zipCode = '';
    this.activated = true;
  }
}
