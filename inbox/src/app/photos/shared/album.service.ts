import { Injectable } from '@angular/core';
import {Album, IAlbum} from './album'
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from "angularfire2";
import {AuthService} from "../../auth/auth.service";

@Injectable()
export class AlbumService {

  private albumPath: string;

  constructor(private af: AngularFire, private authService: AuthService) {
    this.albumPath = `albums/${this.authService.id}`;

  }

  public createAlbum(album: any): void {
    this.af.database.list(this.albumPath)
      .push(album)
  }

  public getAllAlbums(): FirebaseListObservable<IAlbum[]> {
    return this.af.database.list(this.albumPath)
  }

  public getAlbumForKey(key: string): FirebaseObjectObservable<IAlbum> {
    return this.af.database.object(`${this.albumPath}/${key}`)
  }

}
