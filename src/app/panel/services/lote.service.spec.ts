import { TestBed, inject } from '@angular/core/testing';

import { LoteService } from './lote.service';

describe('LoteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoteService]
    });
  });

  it('should ...', inject([LoteService], (service: LoteService) => {
    expect(service).toBeTruthy();
  }));
});
