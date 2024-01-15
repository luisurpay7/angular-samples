import { Empleado } from "./empleado.model";

export class EmpleadoService {

    empleados: Empleado[] = [
        new Empleado("Luis", "U", "Practicante", 1200),
        new Empleado("Pedro", "P", "Arquitecto", 2400),
        new Empleado("Carlo", "T", "Desarrollador", 200),
      ];

    agregarEmpleadoServicio(empleado: Empleado){
        this.empleados.push(empleado);
    }
}