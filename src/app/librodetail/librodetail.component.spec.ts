import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrodetailComponent } from './librodetail.component';

describe('LibrodetailComponent', () => {
  let component: LibrodetailComponent;
  let fixture: ComponentFixture<LibrodetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibrodetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrodetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
