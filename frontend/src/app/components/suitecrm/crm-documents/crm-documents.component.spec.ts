import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmDocumentsComponent } from './crm-documents.component';

describe('CrmDocumentsComponent', () => {
  let component: CrmDocumentsComponent;
  let fixture: ComponentFixture<CrmDocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmDocumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
