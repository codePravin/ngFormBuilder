import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipFormComponent } from './tooltip-form.component';

describe('TooltipFormComponent', () => {
  let component: TooltipFormComponent;
  let fixture: ComponentFixture<TooltipFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TooltipFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TooltipFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
