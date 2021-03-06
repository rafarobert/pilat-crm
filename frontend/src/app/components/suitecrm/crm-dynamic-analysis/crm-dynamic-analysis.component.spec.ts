import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmDynamicAnalysisComponent } from './crm-dynamic-analysis.component';

describe('CrmDynamicAnalysisComponent', () => {
  let component: CrmDynamicAnalysisComponent;
  let fixture: ComponentFixture<CrmDynamicAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmDynamicAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmDynamicAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
