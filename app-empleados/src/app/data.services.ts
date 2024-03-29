import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { LoginService } from "./login/login.service";

@Injectable()
export class DataServices {

  constructor(private httpClient: HttpClient, private loginService: LoginService){}

  cargarEmpleados(){
    const token = this.loginService.getIdToken();
    return this.httpClient.get('https://clientesangular-a5570-default-rtdb.firebaseio.com/datos.json?auth=' + token);
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

  eliminarEmpleado(indice: number){
    const url = `https://clientesangular-a5570-default-rtdb.firebaseio.com/datos/${indice}.json`;
    this.httpClient.delete(url).subscribe(
      response => console.log("Se eliminado el empleado: " + response),
      error => console.log("Error: " + error),
    );
  }
}
