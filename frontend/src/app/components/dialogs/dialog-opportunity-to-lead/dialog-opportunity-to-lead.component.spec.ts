import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogOpportunityToLeadComponent } from './dialog-opportunity-to-lead.component';

describe('DialogOpportunityToLeadComponent', () => {
  let component: DialogOpportunityToLeadComponent;
  let fixture: ComponentFixture<DialogOpportunityToLeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogOpportunityToLeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogOpportunityToLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
