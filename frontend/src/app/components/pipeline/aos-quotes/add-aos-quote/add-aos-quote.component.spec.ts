import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAosQuoteComponent } from './add-aos-quote.component';

describe('AddAosQuoteComponent', () => {
  let component: AddAosQuoteComponent;
  let fixture: ComponentFixture<AddAosQuoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAosQuoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAosQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
