import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSetCallComponent } from './dialog-set-call.component';

describe('DialogSetCallComponent', () => {
  let component: DialogSetCallComponent;
  let fixture: ComponentFixture<DialogSetCallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogSetCallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogSetCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
