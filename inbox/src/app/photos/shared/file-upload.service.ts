import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from "rxjs";

@Injectable()
export class FileUploadService {

  constructor(private http: Http) { }

  public uploadAndAnnotate(formData: FormData): Observable<any> {
    return this.http.post('http://localhost:8000/upload', formData)
      // .map((res: Response) => res.json())s
      .map(res => {
        console.log(res)
      })
      .catch((error: any) => Observable.throw(error.json().error || 'Server Error'));
  }

}
