import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCronComponent } from './delete-cron.component';

describe('DeleteCronComponent', () => {
  let component: DeleteCronComponent;
  let fixture: ComponentFixture<DeleteCronComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteCronComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
