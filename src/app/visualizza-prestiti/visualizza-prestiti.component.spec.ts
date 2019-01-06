import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizzaPrestitiComponent } from './visualizza-prestiti.component';

describe('VisualizzaPrestitiComponent', () => {
  let component: VisualizzaPrestitiComponent;
  let fixture: ComponentFixture<VisualizzaPrestitiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizzaPrestitiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizzaPrestitiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
