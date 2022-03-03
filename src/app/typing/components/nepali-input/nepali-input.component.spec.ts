import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NepaliInputComponent } from './nepali-input.component';

describe('NepaliInputComponent', () => {
  let component: NepaliInputComponent;
  let fixture: ComponentFixture<NepaliInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NepaliInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NepaliInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
