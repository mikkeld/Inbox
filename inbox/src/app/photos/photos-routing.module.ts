import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PhotosComponent} from './photos/photos.component';
import { CreateAlbumComponent } from './album/create-album/create-album.component';
import { AlbumComponent } from './album/album/album.component';
import { PhotoDetailComponent } from './photo-detail/photo-detail.component';
import { AlbumDetailComponent } from './album/album-detail/album-detail.component';
import {AuthGuard} from "../auth/auth-guard";

const routes: Routes = [
  { path: 'photos',  component: PhotosComponent, canActivate: [AuthGuard] },
  { path: 'photos/:filter', component: PhotosComponent},
  { path: 'photos/detail/:id', component: PhotoDetailComponent },
  { path: 'create-album', component: CreateAlbumComponent},
  { path: 'albums', component: AlbumComponent },
  { path: 'albums/:id', component: AlbumDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})

export class PhotosRoutingModule {}
