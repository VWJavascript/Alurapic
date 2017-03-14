import {Component} from '@angular/core';
import {Http} from '@angular/http';

@Component({
  moduleId: module.id,
  selector: 'listing',
  templateUrl: './listing.component.html'
})
export class ListingComponent {
  photos: Object[] = [];
  constructor(http: Http) {
    http.get('v1/fotos')
      .map(response => response.json())
      .subscribe(
        photos => {
          this.photos = photos;
          console.log(this.photos)
        },
        erro => console.log(erro)
      );
  }
}
