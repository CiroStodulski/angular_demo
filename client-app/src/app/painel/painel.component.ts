import { Component, Input } from '@angular/core'
import { HtmlAstPath } from '@angular/compiler';
import { Http } from '@angular/http';
import { ListagemComponent } from '../listagem/listagem.component';

@Component({
    moduleId: module.id,
    selector: 'painel',
    templateUrl: './painel.component.html'
})
export class PainelComponent {

    @Input() titulo: string;
    @Input() dado;
    http: Http;

    constructor(http: Http) {
        this.http = http;
    }
    remover(event, dado) {
        event.preventDefault();
        console.log(dado);
        this.http.delete('http://localhost:3000/dado/' + dado).
            subscribe(res => console.log(res));
    }

} 