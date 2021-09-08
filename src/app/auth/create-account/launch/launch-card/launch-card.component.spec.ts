import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import {LaunchCardComponent} from './launch-card.component';
import {Component, DebugElement} from '@angular/core';
import {RouterTestingModule} from '@angular/router/testing';
import {SharedModule} from '../../../../shared/shared.module';
import {Router, RouterModule} from '@angular/router';
import {CreateAccountService} from '../../create-account.service';
import {of} from 'rxjs';
import {By} from '@angular/platform-browser';
import {Location} from '@angular/common';
import {SignupDto} from '../../../../shared/dto/signup-dto';

describe('LaunchCardComponent', () => {
  let component: LaunchCardComponent;
  let fixture: ComponentFixture<LaunchCardComponent>;
  let de: DebugElement;
  let spy: jasmine.Spy;
  beforeEach(async(() => {
    const serviceStub = {
      init: () => of('init'),
    };
    TestBed.configureTestingModule({
      declarations: [LaunchCardComponent, DummyComponent],
      imports: [
        RouterTestingModule.withRoutes(
          [
            {path: 'create-account/personal-info', component: DummyComponent}
          ]
        ),
        // RouterTestingModule.withRoutes([]),
        // RouterModule.forRoot([]),
        SharedModule],
      // another way of spying "uncomment line below"
      // providers: [{provide: CreateAccountService, useValue: serviceStub}]
      // providers: [CreateAccountService]
    })
      .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchCardComponent);
    component = fixture.componentInstance;
    // createAccountService = new CreateAccountService(); // inject instead
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  describe('Basic HTML', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
    it('should contain', () => {
      expect(de.nativeElement.querySelector('button.btn.btn-primary.btn-block')).toBeTruthy();
      expect(de.nativeElement.querySelector('button.btn.btn-primary.btn-block').innerText).toBe('GET STARTED');
      expect(de.query(By.css('button.btn.btn-primary.btn-block')).nativeElement.innerText).toBe('GET STARTED');
      expect(de.nativeElement.querySelector('button.btn.btn-outline-primary.btn-block').innerText).toBe('LOG IN');
    });
  });
  describe('Navigation', () => {
    let router: Router = null;
    beforeEach(() => {
      router = de.injector.get(Router);
    });
    it('should navigate to "create-account" before Click', () => {
      const location = TestBed.get(Location);
      expect(location.path()).toBe('');
    });
    it('should navigate to "/create-account/personal-info" on "GET STARTED" Click', () => {
      const location: Location = TestBed.get(Location);
      const buttonElement: HTMLButtonElement = de.query(
        By.css('button.btn.btn-primary.btn-block'))
        .nativeElement;
      buttonElement.click();
      fixture.detectChanges();
      return fixture.whenStable().then(value => {
        expect(location.path()).toBe('/create-account/personal-info');
      });
    });
    it('should navigate to "/create-account/personal-info" on "GET STARTED" Click "spy"', async () => {
      const myRouter: Router = TestBed.get(Router);
      // with this you don't need withRoutes in RouterTestingModule.withRoutes and the DummyComponent
      // additionally you can use RouterModule.forRoot([]) instead of RouterTestingModule
      spy = spyOn(myRouter, 'navigate').and.callThrough();
      const buttonElement: HTMLButtonElement = de.query(
        By.css('button.btn.btn-primary.btn-block'))
        .nativeElement;
      buttonElement.click();
      expect(myRouter.navigate).toHaveBeenCalledWith(['/create-account/personal-info']);
    });

    it('should navigate to "/create-account/personal-info" on "GET STARTED" Click fakeAsync', fakeAsync(() => {
      const location: Location = TestBed.get(Location);
      const buttonElement: HTMLButtonElement = de.query(
        By.css('button.btn.btn-primary.btn-block'))
        .nativeElement;
      buttonElement.click();
      tick(500);
      expect(location.path()).toBe('/create-account/personal-info');
    }));
  });
  describe('Service and Component logic', () => {
    let createAccountService: CreateAccountService = null;
    beforeEach(() => {
      createAccountService = de.injector.get(CreateAccountService);
    });
    it('should getStarted() called on "GET STARTED" button click', () => {
      const buttonElement: HTMLButtonElement = de.query(
        By.css('button.btn.btn-primary.btn-block'))
        .nativeElement;
      spy = spyOn(component, 'getStarted').and.callThrough();
      expect(createAccountService.activated).toBeFalsy();
      buttonElement.click();
      fixture.detectChanges();
      fixture.whenStable().then(value => {
        expect(spy).toHaveBeenCalled();
        expect(spy.calls.all().length).toEqual(1);
        expect(createAccountService.activated).toBeTruthy();
        // expect(component.getStarted).toHaveBeenCalled();
      });
    });
    it('should instantiate signUpDto on "GET STARTED" button click', () => {
      const buttonElement: HTMLButtonElement = de.query(
        By.css('button.btn.btn-primary.btn-block'))
        .nativeElement;
      spy = spyOn(createAccountService, 'init').and.callThrough();
      expect(createAccountService.activated).toBeFalsy();
      buttonElement.click();
      fixture.detectChanges();
      fixture.whenStable().then(value => {
        expect(spy).toHaveBeenCalled();
        expect(spy.calls.all().length).toEqual(1);
        expect(createAccountService.activated).toBeTruthy();
      });
    });
  });
  // test list generated by ngfor from an observable list
  // it('test list stub', () => {
  //   component.list = of([{id: 'abc', name: 'item1'}]);
  //   fixture.detectChanges();
  //   const listItems = de.queryAll(
  //     By.css('li'));
  //   expect(listItems.length).toBe(1);
  // });
});

@Component({template: ''})
class DummyComponent {
}
