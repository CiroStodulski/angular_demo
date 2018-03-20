import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'app',
    templateUrl: './app/app.component.html'
})
export class AppComponent {

    dados: Object[];

    constructor(http: Http) {

        http.get('/v1/dados')
            .subscribe(res => {
                this.dados = res.json();
                // criar serviço no seridor
                // this.dados = [{teste:'teste'}]
                // console.log(this.dados)
            });
    }
}

