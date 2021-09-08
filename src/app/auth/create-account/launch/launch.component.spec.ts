import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LaunchComponent} from './launch.component';
import {LaunchCardComponent} from './launch-card/launch-card.component';
import {SharedModule} from '../../../shared/shared.module';
import {RouterTestingModule} from '@angular/router/testing';
import {DebugElement} from '@angular/core';

describe('LaunchComponent', () => {
  let component: LaunchComponent;
  let fixture: ComponentFixture<LaunchComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LaunchComponent, LaunchCardComponent],
      imports: [
        RouterTestingModule,
        SharedModule],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    de = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(de.nativeElement.querySelector('app-launch-card')).toBeTruthy();
  });
});
