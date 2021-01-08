import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'unit-test';

  somarValores(primeroValor: number, segundoValore:number) {
    return primeroValor + segundoValore;
  }
}
