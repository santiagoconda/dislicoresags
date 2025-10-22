import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cantegorias } from './cantegorias';

describe('Cantegorias', () => {
  let component: Cantegorias;
  let fixture: ComponentFixture<Cantegorias>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cantegorias]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cantegorias);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
