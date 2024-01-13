import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'App Calculadora';  //las propiedades tienen que estar inicializadas o definida su asignacion en un constructor sino error

  numero1: number = 0;
  numero2: number = 0;
  resultado: number = 0;

  sumar(){
    this.resultado = this.numero1 + this.numero2;
  }

  restar(){
    this.resultado = this.numero1 - this.numero2;
  }
}
