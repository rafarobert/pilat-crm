import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmToolsComponent } from './crm-tools.component';

describe('CrmToolsComponent', () => {
  let component: CrmToolsComponent;
  let fixture: ComponentFixture<CrmToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmToolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
