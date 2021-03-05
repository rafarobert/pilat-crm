import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmMeetingsComponent } from './crm-meetings.component';

describe('CrmMeetingsComponent', () => {
  let component: CrmMeetingsComponent;
  let fixture: ComponentFixture<CrmMeetingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmMeetingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmMeetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
