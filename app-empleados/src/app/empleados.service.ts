import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";

@Injectable()
export class EmpleadoService {

  constructor(private servicioVentanaEmergente: ServicioEmpleadosService){}

    empleados: Empleado[] = [
        new Empleado("Luis", "U", "Practicante", 1200),
        new Empleado("Pedro", "P", "Arquitecto", 2400),
        new Empleado("Carlo", "T", "Desarrollador", 200),
      ];

    agregarEmpleadoServicio(empleado: Empleado){
        this.servicioVentanaEmergente.muestarMensaje("Persona se va a agregar: " + "\n" +
        empleado.nombre + "\n" + "Salario: " + empleado.salario);

        this.empleados.push(empleado);
    }
}
