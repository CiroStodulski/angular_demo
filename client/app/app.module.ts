import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map'
import { PainelModule } from './painel/painel.module';
import { CadastroComponent } from './cadastro/cadastro.component';
@NgModule({
  imports: [BrowserModule, HttpModule, PainelModule],
  declarations: [AppComponent, CadastroComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }