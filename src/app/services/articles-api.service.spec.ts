import { TestBed } from '@angular/core/testing';

import { ArticlesApiService } from './articles-api.service';

describe('ArticlesApiService', () => {
  let service: ArticlesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticlesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
