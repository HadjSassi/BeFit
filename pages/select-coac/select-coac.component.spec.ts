import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCoacComponent } from './select-coac.component';

describe('SelectCoacComponent', () => {
  let component: SelectCoacComponent;
  let fixture: ComponentFixture<SelectCoacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectCoacComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectCoacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
