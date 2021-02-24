import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSetContactMailComponent } from './dialog-set-contact-mail.component';

describe('DialogSetContactMailComponent', () => {
  let component: DialogSetContactMailComponent;
  let fixture: ComponentFixture<DialogSetContactMailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogSetContactMailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogSetContactMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
