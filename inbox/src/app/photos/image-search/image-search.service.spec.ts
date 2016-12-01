/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ImageSearchService } from './image-search.service';

describe('Service: ImageSearch', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImageSearchService]
    });
  });

  it('should ...', inject([ImageSearchService], (service: ImageSearchService) => {
    expect(service).toBeTruthy();
  }));
});
