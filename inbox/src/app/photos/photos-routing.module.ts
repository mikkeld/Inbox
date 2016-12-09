import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PhotosComponent} from './photos/photos.component';
import { CreateAlbumComponent } from './album/create-album/create-album.component';
import { AlbumComponent } from './album/album/album.component'

const routes: Routes = [
  { path: 'photos',  component: PhotosComponent},
  { path: 'photos/:filter', component: PhotosComponent},
  { path: 'create-album', component: CreateAlbumComponent},
  { path: 'albums', component: AlbumComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})

export class PhotosRoutingModule {}
