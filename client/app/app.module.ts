import 'rxjs/add/operator/map';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {PhotoModule} from './photo/photo.module';
import {PanelModule} from './panel/panel.module';
import {RegisterComponent} from './register/register.component';
import {ListingComponent} from './listing/listing.component';
import {routing} from './app.routes';

@NgModule({
  imports: [
    BrowserModule,
    PhotoModule,
    HttpModule,
    PanelModule,
    FormsModule,
    routing,
  ],
  declarations: [
    AppComponent,
    RegisterComponent,
    ListingComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}



