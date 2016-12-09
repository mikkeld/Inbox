import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {PhotoListComponent} from "./photo-list/photo-list.component";
import {PhotosService} from './shared/photos.service';
import { PhotogroupListComponent } from './photogroup-list/photogroup-list.component';
import { PhotogroupItemComponent } from './photogroup-item/photogroup-item.component';
import { PhotosComponent } from './photos/photos.component';
import {FileUploadComponent} from "./shared/file-upload";
import {FileUploadService} from './shared/file-upload.service';
import { ImageSearchComponent } from './image-search/image-search.component';
import {ImageSearchService} from "./image-search/image-search.service";
import {AlbumSelectComponent} from './album/album-select.component';
import { AlbumSelectBarComponent } from './album/album-select-bar/album-select-bar.component';
import { CreateAlbumComponent } from './album/create-album/create-album.component';
import { CreateAlbumService } from './album/create-album/create-album.service';
import { AlbumService } from "./shared/album.service";
import { AlbumListComponent } from './album/album-list/album-list.component';
import { AlbumItemComponent } from './album/album-item/album-item.component';
import { AlbumComponent } from './album/album/album.component';
import { PhotoNavBarComponent } from './photo-nav-bar/photo-nav-bar.component';
import { PhotoDetailComponent } from './photo-detail/photo-detail.component';
import { AlbumDetailComponent } from './album/album-detail/album-detail.component';
import { AlbumDetailListComponent } from './album/album-detail-list/album-detail-list.component';
import { AlbumDetailItemComponent } from './album/album-detail-item/album-detail-item.component';
import { PhotoItemComponent } from './photo-item/photo-item.component';
import { AlbumSelectService } from './album/album-select.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    PhotoListComponent,
    PhotogroupListComponent,
    PhotogroupItemComponent,
    PhotosComponent,
    FileUploadComponent,
    ImageSearchComponent,
    AlbumSelectComponent,
    AlbumSelectBarComponent,
    CreateAlbumComponent,
    AlbumListComponent,
    AlbumItemComponent,
    AlbumComponent,
    PhotoNavBarComponent,
    PhotoDetailComponent,
    AlbumDetailComponent,
    AlbumDetailListComponent,
    AlbumDetailItemComponent,
    PhotoItemComponent
  ],
  providers: [
    PhotosService,
    FileUploadService,
    ImageSearchService,
    CreateAlbumService,
    AlbumService,
    AlbumSelectService
  ]
})

export class PhotosModule { }

export {PhotosService, FileUploadService, ImageSearchService, CreateAlbumService, AlbumService, AlbumSelectService}

