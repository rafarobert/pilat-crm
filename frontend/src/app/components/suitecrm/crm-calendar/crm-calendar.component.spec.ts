import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmCalendarComponent } from './crm-calendar.component';

describe('CrmCalendarComponent', () => {
  let component: CrmCalendarComponent;
  let fixture: ComponentFixture<CrmCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
