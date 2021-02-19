import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AosQuotesComponent } from './aos-quotes.component';

describe('AosQuotesComponent', () => {
  let component: AosQuotesComponent;
  let fixture: ComponentFixture<AosQuotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AosQuotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AosQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
