import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCronComponent } from './add-cron.component';

describe('AddCronComponent', () => {
  let component: AddCronComponent;
  let fixture: ComponentFixture<AddCronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
