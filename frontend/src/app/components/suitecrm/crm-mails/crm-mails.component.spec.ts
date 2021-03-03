import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmMailsComponent } from './crm-mails.component';

describe('CrmMailsComponent', () => {
  let component: CrmMailsComponent;
  let fixture: ComponentFixture<CrmMailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmMailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmMailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
