import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmAccountsComponent } from './crm-accounts.component';

describe('CrmAccountsComponent', () => {
  let component: CrmAccountsComponent;
  let fixture: ComponentFixture<CrmAccountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmAccountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
