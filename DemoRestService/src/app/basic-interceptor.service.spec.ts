import { TestBed } from '@angular/core/testing';

import { BasicInterceptorService } from './basic-interceptor.service';

describe('BasicInterceptorService', () => {
  let service: BasicInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasicInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
