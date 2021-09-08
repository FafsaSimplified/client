import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import {PersonalInfoFormComponent} from './personal-info-form.component';
import {SharedModule} from '../../../../shared/shared.module';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {DebugElement} from '@angular/core';
import {CreateAccountService} from '../../create-account.service';
import {Router, RouterModule} from '@angular/router';
import {By} from '@angular/platform-browser';

describe('PersonalInfoFormComponent', () => {
  let component: PersonalInfoFormComponent;
  let fixture: ComponentFixture<PersonalInfoFormComponent>;
  let de: DebugElement;
  // let spy: jasmine.Spy;
  let createAccountService: CreateAccountService = null;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalInfoFormComponent],
      imports: [
        RouterTestingModule.withRoutes([]),
        // RouterModule.forRoot([]),
        SharedModule,
        ReactiveFormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalInfoFormComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    createAccountService = de.injector.get(CreateAccountService);
    spyOn(createAccountService, 'init').and.callThrough();
    // Manual launch component call to init
    createAccountService.init();
    fixture.detectChanges();
  });

  describe('Basic HTML', () => {
    beforeEach(() => {
    });
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
  describe('Navigation', () => {
    beforeEach(() => {
    });
  });
  describe('Service and component logic', () => {
    beforeEach(() => {
    });
    it('should create', () => {
      expect(component).toBeTruthy();
    });
    it('Should fail to navigate to "/create-account/account-info" on click "next"', () => {
      const router: Router = TestBed.get(Router);
      spyOn(router, 'navigate').and.callThrough();
      const buttonElement: HTMLButtonElement = de.query(By.css('button.btn.btn-primary.btn-block'))
        .nativeElement;
      buttonElement.click();
      expect(router.navigate).not.toHaveBeenCalledWith(['/create-account/account-info']);

    });
    it('Should navigate to "/create-account/account-info" with valid input on click "next"', async () => {
      const router: Router = TestBed.get(Router);
      // spyOn(router, 'navigate').and.callThrough();
      spyOn(router, 'navigate').and.returnValue(Promise.resolve(true));
      const buttonElement: HTMLButtonElement = de.query(By.css('button.btn.btn-primary.btn-block'))
        .nativeElement;
      const fnameInput: HTMLInputElement = de.query(By.css('#fname'))
        .nativeElement;
      const mnameInput: HTMLInputElement = de.query(By.css('#mname'))
        .nativeElement;
      const lnameInput: HTMLInputElement = de.query(By.css('#lname'))
        .nativeElement;
      const dayInput: HTMLInputElement = de.query(By.css('#day'))
        .nativeElement;
      const monthInput: HTMLInputElement = de.query(By.css('#month'))
        .nativeElement;
      const yearInput: HTMLInputElement = de.query(By.css('#year'))
        .nativeElement;
      const ssnInput: HTMLInputElement = de.query(By.css('#ssn'))
        .nativeElement;
      // fnameInput.value = 'John';
      mnameInput.value = 'M';
      lnameInput.value = 'Doe';
      dayInput.value = '2';
      monthInput.value = '12';
      yearInput.value = '1996';
      ssnInput.value = '945455098';
      // fnameInput.dispatchEvent(new Event('input'));
      mnameInput.dispatchEvent(new Event('input'));
      lnameInput.dispatchEvent(new Event('input'));
      dayInput.dispatchEvent(new Event('input'));
      monthInput.dispatchEvent(new Event('input'));
      yearInput.dispatchEvent(new Event('input'));
      ssnInput.dispatchEvent(new Event('input'));

      //
      const fname = component.personalInfoForm.controls.firstName;
      fname.setValue('John');
      spyOn(createAccountService, 'validatePersonalInfo').and.returnValue(Promise.resolve(true));
      buttonElement.click();
      fixture.detectChanges();
      const expectedSignupDto = {
        firstName: 'John',
        middleName: 'M',
        lastName: 'Doe',
        dob: '1996-12-02',
        ssn: '945455098',
        smsOptIn: false,
        language: 'EN',
        cellPhone: '',
        email: '',
        password: '',
        username: '',
        streetAddress: '',
        city: '',
        state: '',
        zipCode: ''
      };
      return fixture.whenStable().then(() => {
        expect(fnameInput.value).toBe('John');
        expect(lnameInput.value).toBe('Doe');
        expect(router.navigate).toHaveBeenCalledWith(['/create-account/account-info']);
        console.log('sign', createAccountService.signUpDto);
        expect(JSON.stringify(createAccountService.signUpDto)).toEqual(JSON.stringify(expectedSignupDto));
      });
    });
  });
});
