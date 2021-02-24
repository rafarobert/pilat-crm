import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDictionaryComponent } from './delete-dictionary.component';

describe('DeleteDictionaryComponent', () => {
  let component: DeleteDictionaryComponent;
  let fixture: ComponentFixture<DeleteDictionaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteDictionaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteDictionaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
