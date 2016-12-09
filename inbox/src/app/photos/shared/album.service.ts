import { Injectable } from '@angular/core';
import {Album, IAlbum} from './album'
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from "angularfire2";

@Injectable()
export class AlbumService {

  constructor(private af: AngularFire) { }

  public createAlbum(album: any): void {
    this.af.database.list('albums/Imf4nFal01MofFYqOe9I8LcfhX22')
      .push(album)
  }

  public getAllAlbums(): FirebaseListObservable<IAlbum[]> {
    return this.af.database.list('albums/Imf4nFal01MofFYqOe9I8LcfhX22')
  }

}
