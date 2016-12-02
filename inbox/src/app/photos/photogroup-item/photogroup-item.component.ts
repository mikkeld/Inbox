import { ChangeDetectionStrategy, Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router';
import {filter} from "rxjs/operator/filter";

@Component({
  selector: 'app-photogroup-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './photogroup-item.component.html',
  styleUrls: ['./photogroup-item.component.css']
})
export class PhotogroupItemComponent implements OnInit {
  @Input() photoTag: string;
  @Input() filter: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public filterImagesFromRoute(tag: string): void {
    if(this.filter == tag) {
      this.router.navigate(['/photos']); //Navigate to root photo folder
    } else {
      this.router.navigate(['/photos', tag]); //Filter current tag
    }
  }
}
