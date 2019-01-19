import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElencoRivChildComponent } from './elenco-riv-child.component';

describe('ElencoRivChildComponent', () => {
  let component: ElencoRivChildComponent;
  let fixture: ComponentFixture<ElencoRivChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElencoRivChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElencoRivChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
