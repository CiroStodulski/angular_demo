import { Component, Input } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: './cadastro.component.html'
})

export class CadastroComponent {

    @Input() nome: string = '';
    @Input() sobrenome: string = '';
    http: Http;

    constructor(http: Http) {
        this.http = http;
    }

    cadastrar(event) {
        let pessoa = { name: this.nome, last_name: this.sobrenome }
        event.preventDefault();
        console.log(pessoa);

        this.http.post('http://localhost:3000/dado', pessoa).
            subscribe(res => console.log(res));

    }
}