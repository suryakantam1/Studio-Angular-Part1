import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EuipmentComponent } from './euipment.component';

describe('EuipmentComponent', () => {
  let component: EuipmentComponent;
  let fixture: ComponentFixture<EuipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EuipmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EuipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
