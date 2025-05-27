import { TestBed } from '@angular/core/testing';

import { PartsAndAccesoriesService } from './parts-and-accesories.service';

describe('PartsAndAccesoriesService', () => {
  let service: PartsAndAccesoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartsAndAccesoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
