import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InserisciPrestitoComponent } from './inserisci-prestito.component';

describe('InserisciPrestitoComponent', () => {
  let component: InserisciPrestitoComponent;
  let fixture: ComponentFixture<InserisciPrestitoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InserisciPrestitoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InserisciPrestitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
