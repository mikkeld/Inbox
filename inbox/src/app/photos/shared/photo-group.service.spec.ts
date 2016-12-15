/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PhotoGroupService } from './photo-group.service';

describe('Service: PhotoGroup', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhotoGroupService]
    });
  });

  it('should ...', inject([PhotoGroupService], (service: PhotoGroupService) => {
    expect(service).toBeTruthy();
  }));
});
