import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestisciRivChildComponent } from './gestisci-riv-child.component';

describe('GestisciRivChildComponent', () => {
  let component: GestisciRivChildComponent;
  let fixture: ComponentFixture<GestisciRivChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestisciRivChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestisciRivChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
