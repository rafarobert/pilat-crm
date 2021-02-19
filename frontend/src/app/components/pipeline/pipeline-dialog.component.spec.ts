import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipelineDialogComponent } from './pipeline-dialog.component';

describe('PipelineDialogComponent', () => {
  let component: PipelineDialogComponent;
  let fixture: ComponentFixture<PipelineDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipelineDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipelineDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
