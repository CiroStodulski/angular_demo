import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'listagem',
    templateUrl: './listagem.component.html'
})

export class ListagemComponent {

    dados: Object[];
    http: Http;
    constructor(http: Http) {

        http.get('http://localhost:3000/dado')
            .map(res => res.json())
            .subscribe(res => {
                console.log(res)
                this.dados = res
            }
                , err => console.log(err));


    }


    list() {
        this.http.get('http://localhost:3000/dado')
            .map(res => res.json())
            .subscribe(res => {
                console.log(res)
                this.dados = res
            }
                , err => console.log(err));

    }
}
