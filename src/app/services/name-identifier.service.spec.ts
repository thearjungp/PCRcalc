import { TestBed } from '@angular/core/testing';

import { NameIdentifierService } from './name-identifier.service';

describe('NameIdentifierService', () => {
  let service: NameIdentifierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NameIdentifierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
