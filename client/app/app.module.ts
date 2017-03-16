import 'rxjs/add/operator/map';
import { NgModule }  from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';
import { FotoModule } from './foto/foto.module';
import { PainelModule } from './painel/painel.module';
import { BotaoModule } from './botao/botao.module';
import { ModalModule } from './modal/modal.module';
import { routing }  from './app.routes';

@NgModule({
  imports: [
    BrowserModule,
    FotoModule,
    HttpModule,
    PainelModule,
    FormsModule,
    ReactiveFormsModule,
    BotaoModule,
    ModalModule,
    routing
  ],
  declarations: [ AppComponent, CadastroComponent, ListagemComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
