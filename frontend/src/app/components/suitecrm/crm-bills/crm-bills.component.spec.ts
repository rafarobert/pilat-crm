import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmBillsComponent } from './crm-bills.component';

describe('CrmBillsComponent', () => {
  let component: CrmBillsComponent;
  let fixture: ComponentFixture<CrmBillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmBillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmBillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
