import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankyouPAPComponent } from './thankyou-pap.component';

describe('ThankyouPAPComponent', () => {
  let component: ThankyouPAPComponent;
  let fixture: ComponentFixture<ThankyouPAPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThankyouPAPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThankyouPAPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
