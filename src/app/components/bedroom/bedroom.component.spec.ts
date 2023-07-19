import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BedroomComponent } from './bedroom.component';

describe('BedroomComponent', () => {
  let component: BedroomComponent;
  let fixture: ComponentFixture<BedroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BedroomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BedroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
