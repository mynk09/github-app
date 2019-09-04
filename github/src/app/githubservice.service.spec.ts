import { TestBed } from '@angular/core/testing';

import { githubservice } from './githubservice.service';

describe('GithubserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: githubservice = TestBed.get(githubservice);
    expect(service).toBeTruthy();
  });
});
