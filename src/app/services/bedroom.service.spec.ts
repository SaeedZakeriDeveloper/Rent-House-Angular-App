import { TestBed } from '@angular/core/testing';

import { BedroomService } from './bedroom.service';

describe('BedroomService', () => {
  let service: BedroomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BedroomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
