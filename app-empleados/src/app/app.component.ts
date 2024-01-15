import { Component } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo = 'Listado de Empleados';

  constructor(private miServicio: ServicioEmpleadosService){}

  empleados: Empleado[] = [
    new Empleado("Luis", "U", "Practicante", 1200),
    new Empleado("Pedro", "P", "Arquitecto", 2400),
    new Empleado("Carlo", "T", "Desarrollador", 200),
  ];

  cuadroNombre: string = "";
  cuadroApellido: string = "";
  cuadroCargo: string = "";
  cuadroSalario: number = 0;

  agregarEmpleado(){
    let nuevoEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    this.miServicio.muestarMensaje("Nombre del empleado: " + nuevoEmpleado.nombre);
    this.empleados.push(nuevoEmpleado);
  }
}
