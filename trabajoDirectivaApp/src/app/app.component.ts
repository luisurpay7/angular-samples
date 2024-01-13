import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Registro de Usuarios';

  apellido: string = "";
  cargo: string = "";

  mensaje = "Usuarios registrado con éxito";
  registrado = false;

  // entradas: object[];
  // entradas: any;
  entradas: Array<{titulo: string}>

  constructor(){
    this.entradas = [
      {titulo: 'PHP no está muerto'},
      {titulo: 'Java presenta más de 20 años'},
      {titulo: 'Python cada vez más presente'}
    ]
  }

  registrarUsuario(){
    this.registrado = true;
  }

}
