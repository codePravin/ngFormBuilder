import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSelectComponent } from './ng-select.component';

describe('NgSelectComponent', () => {
  let component: NgSelectComponent;
  let fixture: ComponentFixture<NgSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgSelectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
