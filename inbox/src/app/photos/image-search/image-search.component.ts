import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {Subject, Observable} from "rxjs";
import {ImageSearchService} from "./image-search.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-image-search',
  templateUrl: './image-search.component.html',
  styleUrls: ['./image-search.component.css']
})
export class ImageSearchComponent implements OnInit {
  @ViewChild('searchBox') searchbox: ElementRef;
  private searchTerms = new Subject<string>();
  tags: Observable<string[]>;

  constructor(private imageSearchService: ImageSearchService, private router: Router) { }

  ngOnInit() {
    this.tags = this.searchTerms
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => term
        ? this.imageSearchService.search(term)
        : Observable.of<string[]>([]))
      .catch(error => {
        console.log(error);
        return Observable.of<string[]>([]);
      });
  }

  public search(term: string) {
    this.searchTerms.next(term);
  }

  public goToRoute(tag: string): void {
    this.searchbox.nativeElement.value = "";
    this.searchTerms.next("");
    this.router.navigate(['/photos', tag]);
  }

}
