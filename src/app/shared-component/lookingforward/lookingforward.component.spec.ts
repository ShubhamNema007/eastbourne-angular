import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LookingforwardComponent } from './lookingforward.component';

describe('LookingforwardComponent', () => {
  let component: LookingforwardComponent;
  let fixture: ComponentFixture<LookingforwardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LookingforwardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LookingforwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
