import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizzaRestituitiComponent } from './visualizza-restituiti.component';

describe('VisualizzaRestituitiComponent', () => {
  let component: VisualizzaRestituitiComponent;
  let fixture: ComponentFixture<VisualizzaRestituitiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizzaRestituitiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizzaRestituitiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
