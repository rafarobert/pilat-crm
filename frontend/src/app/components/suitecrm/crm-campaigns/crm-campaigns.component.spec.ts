import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmCampaignsComponent } from './crm-campaigns.component';

describe('CrmCampaignsComponent', () => {
  let component: CrmCampaignsComponent;
  let fixture: ComponentFixture<CrmCampaignsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmCampaignsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmCampaignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
