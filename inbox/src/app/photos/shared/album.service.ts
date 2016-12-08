import { Injectable } from '@angular/core';
import {Album} from './album'
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from "angularfire2";

@Injectable()
export class AlbumService {

  constructor(private af: AngularFire) { }

  public createAlbum(album: any): void {
    console.log(album);
    this.af.database.list('albums/Imf4nFal01MofFYqOe9I8LcfhX22')
      .push(album)
  }

}
