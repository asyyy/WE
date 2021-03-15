import { TestBed } from '@angular/core/testing';

import { ShareDetailService } from './share-detail.service';

describe('ShareDetailService', () => {
  let service: ShareDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShareDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
