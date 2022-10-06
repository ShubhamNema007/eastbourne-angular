import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertiescardsComponent } from './expertiescards.component';

describe('ExpertiescardsComponent', () => {
  let component: ExpertiescardsComponent;
  let fixture: ComponentFixture<ExpertiescardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpertiescardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpertiescardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
