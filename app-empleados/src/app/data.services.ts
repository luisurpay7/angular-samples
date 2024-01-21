import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";

@Injectable()
export class DataServices {

  constructor(private httpClient: HttpClient){}

  guardarEmpleados(empleados: Empleado[]){
    this.httpClient.post('https://clientesangular-a5570-default-rtdb.firebaseio.com/datos.json', empleados).subscribe(
      response => console.log("Se han guardado los empleados: " + response),
      error => console.log("Error: " + error),
    );
  }

}
