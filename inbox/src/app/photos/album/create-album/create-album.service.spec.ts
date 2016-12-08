/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CreateAlbumService } from './create-album.service';

describe('Service: CreateAlbum', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateAlbumService]
    });
  });

  it('should ...', inject([CreateAlbumService], (service: CreateAlbumService) => {
    expect(service).toBeTruthy();
  }));
});
