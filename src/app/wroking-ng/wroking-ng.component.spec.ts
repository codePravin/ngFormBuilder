import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrokingNgComponent } from './wroking-ng.component';

describe('WrokingNgComponent', () => {
  let component: WrokingNgComponent;
  let fixture: ComponentFixture<WrokingNgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WrokingNgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WrokingNgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
