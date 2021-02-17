import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogLeadToOpportunityComponent } from './dialog-lead-to-opportunity.component';

describe('DialogLeadToOpportunityComponent', () => {
  let component: DialogLeadToOpportunityComponent;
  let fixture: ComponentFixture<DialogLeadToOpportunityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogLeadToOpportunityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogLeadToOpportunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
