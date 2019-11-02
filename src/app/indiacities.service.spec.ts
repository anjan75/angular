import { TestBed } from '@angular/core/testing';

import { IndiacitiesService } from './indiacities.service';

describe('IndiacitiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IndiacitiesService = TestBed.get(IndiacitiesService);
    expect(service).toBeTruthy();
  });
});
