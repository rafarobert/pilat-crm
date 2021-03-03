import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmLeadsComponent } from './crm-leads.component';

describe('CrmLeadsComponent', () => {
  let component: CrmLeadsComponent;
  let fixture: ComponentFixture<CrmLeadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmLeadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmLeadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
