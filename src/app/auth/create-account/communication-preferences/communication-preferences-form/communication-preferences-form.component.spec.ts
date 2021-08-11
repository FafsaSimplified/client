import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunicationPreferencesFormComponent } from './communication-preferences-form.component';

describe('CommunicationPreferencesFormComponent', () => {
  let component: CommunicationPreferencesFormComponent;
  let fixture: ComponentFixture<CommunicationPreferencesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunicationPreferencesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunicationPreferencesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
