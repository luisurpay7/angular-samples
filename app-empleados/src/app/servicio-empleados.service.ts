import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioEmpleadosService {

  constructor() { }

  muestarMensaje(mensaje: string){
    alert(mensaje);
  }

}
