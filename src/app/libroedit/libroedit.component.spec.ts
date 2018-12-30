import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroeditComponent } from './libroedit.component';

describe('LibroeditComponent', () => {
  let component: LibroeditComponent;
  let fixture: ComponentFixture<LibroeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibroeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibroeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
