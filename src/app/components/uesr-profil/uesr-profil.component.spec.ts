import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UesrProfilComponent } from './uesr-profil.component';

describe('UesrProfilComponent', () => {
  let component: UesrProfilComponent;
  let fixture: ComponentFixture<UesrProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UesrProfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UesrProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
