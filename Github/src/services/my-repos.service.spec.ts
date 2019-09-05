import { TestBed } from '@angular/core/testing';

import { MyReposService } from './my-repos.service';

describe('MyReposService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyReposService = TestBed.get(MyReposService);
    expect(service).toBeTruthy();
  });
});
