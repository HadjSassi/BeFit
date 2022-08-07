import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectNutrComponent } from './select-nutr.component';

describe('SelectNutrComponent', () => {
  let component: SelectNutrComponent;
  let fixture: ComponentFixture<SelectNutrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectNutrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectNutrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
