import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmContractsComponent } from './crm-contracts.component';

describe('CrmContractsComponent', () => {
  let component: CrmContractsComponent;
  let fixture: ComponentFixture<CrmContractsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmContractsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmContractsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
