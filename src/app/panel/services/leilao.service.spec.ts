import { TestBed, inject } from '@angular/core/testing';

import { LeilaoService } from './leilao.service';

describe('LeilaoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LeilaoService]
    });
  });

  it('should be created', inject([LeilaoService], (service: LeilaoService) => {
    expect(service).toBeTruthy();
  }));
});
