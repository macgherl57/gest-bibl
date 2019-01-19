import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElencoRivisteComponent } from './elenco-riviste.component';

describe('ElencoRivisteComponent', () => {
  let component: ElencoRivisteComponent;
  let fixture: ComponentFixture<ElencoRivisteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElencoRivisteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElencoRivisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
