import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'app',
    templateUrl: './app/app.component.html'
})
export class AppComponent {

    dados: Object[];

    constructor(http: Http) {

        http.get('/dado')
        .map(res => res.json())
        .subscribe(res => this.dados = res
            , err => console.log(err));
          
           
    }
}

