import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";

@Injectable()
export class DataServices {

  constructor(private httpClient: HttpClient){}

  cargarEmpleados(){
    return this.httpClient.get('https://clientesangular-a5570-default-rtdb.firebaseio.com/datos.json');
  }

  guardarEmpleados(empleados: Empleado[]){
    // this.httpClient.post('https://clientesangular-a5570-default-rtdb.firebaseio.com/datos.json', empleados).subscribe(
    this.httpClient.put('https://clientesangular-a5570-default-rtdb.firebaseio.com/datos.json', empleados).subscribe(
      response => console.log("Se han guardado los empleados: " + response),
      error => console.log("Error: " + error),
    );
  }

  actualizaEmpleados(indice: number, empleado: Empleado){
    const url = `https://clientesangular-a5570-default-rtdb.firebaseio.com/datos/${indice}.json`;
    this.httpClient.put(url, empleado).subscribe(
      response => console.log("Se modificado el empleado: " + response),
      error => console.log("Error: " + error),
    );
  }

}
