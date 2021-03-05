import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmCallsComponent } from './crm-calls.component';

describe('CrmCallsComponent', () => {
  let component: CrmCallsComponent;
  let fixture: ComponentFixture<CrmCallsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmCallsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmCallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
