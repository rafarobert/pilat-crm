import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUserUnsignedComponent } from './dialog-user-unsigned.component';

describe('DialogUserUnsignedComponent', () => {
  let component: DialogUserUnsignedComponent;
  let fixture: ComponentFixture<DialogUserUnsignedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogUserUnsignedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogUserUnsignedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
