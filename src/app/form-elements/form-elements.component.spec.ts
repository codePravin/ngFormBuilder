import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormElementsComponent } from './form-elements.component';

describe('FormElementsComponent', () => {
  let component: FormElementsComponent;
  let fixture: ComponentFixture<FormElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormElementsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
