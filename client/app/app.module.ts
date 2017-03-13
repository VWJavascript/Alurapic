import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {PhotoModule} from './photo/photo.module';
import 'rxjs/add/operator/map';

@NgModule({
  imports: [BrowserModule, PhotoModule, HttpModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}


