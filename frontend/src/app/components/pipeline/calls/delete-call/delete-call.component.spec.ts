import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCallComponent } from './delete-call.component';

describe('DeleteCallComponent', () => {
  let component: DeleteCallComponent;
  let fixture: ComponentFixture<DeleteCallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteCallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
