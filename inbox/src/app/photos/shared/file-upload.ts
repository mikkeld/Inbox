import { Component, ElementRef, Renderer, ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import {FileUploadService} from "./file-upload.service";
@Component({
  selector: 'file-upload',
  template: `<input hidden #fileInput type="file" name="image" [attr.multiple]="multiple ? true : null" (change)="upload()" (click)="onChange($event)" >
             <button (click)="showImageBrowseDlg()" class="inline" class="mdl-button mdl-js-button mdl-button--primary">UPLOAD</button>`
})
export class FileUploadComponent {
  @ViewChild('fileInput') fileInput:ElementRef;

  constructor(private http: Http,
              private el: ElementRef,
              private fileUploadService: FileUploadService,
              private renderer: Renderer
  ) {}

  multiple: boolean = false;

  public upload() {
    let inputEl = this.el.nativeElement.firstElementChild;

    if (inputEl.files.length == 0) return;

    let files :FileList = inputEl.files;
    const formData = new FormData();
    formData.append('image', inputEl.files[0]);

    this.fileUploadService.uploadAndAnnotate(formData)
      .subscribe(res => {
        console.log(res)
      });
  }

  public showImageBrowseDlg() {
    let event = new MouseEvent('click', {bubbles: true});
    this.renderer.invokeElementMethod(
      this.fileInput.nativeElement, 'dispatchEvent', [event]);
  }


}
