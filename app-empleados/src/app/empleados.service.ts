import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";
import { DataServices } from "./data.services";

@Injectable()
export class EmpleadoService {

  constructor(private servicioVentanaEmergente: ServicioEmpleadosService, private dataService: DataServices){}

  empleados: Empleado[] = [];

    // empleados: Empleado[] = [
    //     new Empleado("Luis", "U", "Practicante", 1200),
    //     new Empleado("Pedro", "P", "Arquitecto", 2400),
    //     new Empleado("Carlo", "T", "Desarrollador", 200),
    //   ];

  setEmpleados(misEmpleados: Empleado[]){
    this.empleados = misEmpleados;
  }

    obtenerEmpleados(){
      return this.dataService.cargarEmpleados();
    }

    agregarEmpleadoServicio(empleado: Empleado){
        this.servicioVentanaEmergente.muestarMensaje("Persona se va a agregar: " + "\n" +
        empleado.nombre + "\n" + "Salario: " + empleado.salario);

        this.empleados.push(empleado);

        this.dataService.guardarEmpleados(this.empleados);
    }

    encontrarEmpleado(indice: number){
      return this.empleados[indice];
    }

    modificarEmpleadoServicio(indice: number, empleado: Empleado){
      let empleadoAmodificar = this.empleados[indice];
      empleadoAmodificar.nombre = empleado.nombre;
      empleadoAmodificar.apellido = empleado.apellido;
      empleadoAmodificar.cargo = empleado.cargo;
      empleadoAmodificar.salario = empleado.salario;
      this.dataService.actualizaEmpleados(indice, empleado);
    }

    eliminarEmpleadoServicio(indice: number){
      this.empleados.splice(indice, 1);
    }
}
