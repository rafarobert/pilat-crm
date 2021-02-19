import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAosQuoteComponent } from './delete-aos-quote.component';

describe('DeleteAosQuoteComponent', () => {
  let component: DeleteAosQuoteComponent;
  let fixture: ComponentFixture<DeleteAosQuoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteAosQuoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAosQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
