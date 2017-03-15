import {Component, Input} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {PhotoComponent} from '../photo/photo.component';

@Component({
  moduleId: module.id,
  selector: 'register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  photo: PhotoComponent = new PhotoComponent();
  http: Http;

  photoForm: FormGroup;

  constructor(http: Http, fb: FormBuilder) {
    this.http = http;
    this.photoForm = fb.group({
      titulo: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      url: ['', Validators.required],
      description: ['', ],
    });
  }

  register(event) {
    event.preventDefault();
    console.log(this.photo);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.http
      .post('v1/fotos', JSON.stringify(this.photo), {headers: headers})
      .subscribe(() => {
        this.photo = new PhotoComponent();
        console.log('Foto salva com sucesso');
      }, erro => console.log(erro));
  }
}
