import { TestBed, inject } from '@angular/core/testing';

import { MxBidService } from './mx-bid.service';

describe('MxBidService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MxBidService]
    });
  });

  it('should be created', inject([MxBidService], (service: MxBidService) => {
    expect(service).toBeTruthy();
  }));
});
