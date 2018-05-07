import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: './cadastro.component.html'
})

export class CadastroComponent {

    @Input() nome: string = '';
    @Input() sobrenome: string = '';


    constructor() {

    }

    cadastrar() {
        let pessoa = { nome: this.nome, sobrenome: this.sobrenome }
        event.preventDefault();
        console.log(pessoa);
    }
}