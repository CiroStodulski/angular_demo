import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'app',
    templateUrl: './app/app.component.html'
})
export class AppComponent {

    dados: Object[];

    constructor(http: Http) {

<<<<<<< HEAD
        http.get('/dado')
        .map(res => res.json())
        .subscribe(res => this.dados = res
            , err => console.log(err));
          
           
=======
  
>>>>>>> 479cfa9fd6c1f5b5ce72bb4a1eaaba21ce0a3944
    }
}

