import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteParamComponent } from './delete-param.component';

describe('DeleteParamComponent', () => {
  let component: DeleteParamComponent;
  let fixture: ComponentFixture<DeleteParamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteParamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteParamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
