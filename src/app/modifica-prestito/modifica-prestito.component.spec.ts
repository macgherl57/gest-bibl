import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificaPrestitoComponent } from './modifica-prestito.component';

describe('ModificaPrestitoComponent', () => {
  let component: ModificaPrestitoComponent;
  let fixture: ComponentFixture<ModificaPrestitoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificaPrestitoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificaPrestitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
