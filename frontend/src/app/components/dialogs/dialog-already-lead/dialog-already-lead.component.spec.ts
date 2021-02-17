import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAlreadyLeadComponent } from './dialog-already-lead.component';

describe('DialogAlreadyLeadComponent', () => {
  let component: DialogAlreadyLeadComponent;
  let fixture: ComponentFixture<DialogAlreadyLeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogAlreadyLeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAlreadyLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
