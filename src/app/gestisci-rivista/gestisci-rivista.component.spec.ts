import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestisciRivistaComponent } from './gestisci-rivista.component';

describe('GestisciRivistaComponent', () => {
  let component: GestisciRivistaComponent;
  let fixture: ComponentFixture<GestisciRivistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestisciRivistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestisciRivistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
