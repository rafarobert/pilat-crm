import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmQuotesComponent } from './crm-quotes.component';

describe('CrmQuotesComponent', () => {
  let component: CrmQuotesComponent;
  let fixture: ComponentFixture<CrmQuotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmQuotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
