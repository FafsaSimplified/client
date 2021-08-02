import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionPopoverComponent } from './question-popover.component';

describe('QuestionPopoverComponent', () => {
  let component: QuestionPopoverComponent;
  let fixture: ComponentFixture<QuestionPopoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionPopoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
