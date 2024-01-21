import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { EmpleadoService } from '../empleados.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css'
})
export class HomeComponentComponent implements OnInit {
  titulo = 'Listado de Empleados';

  constructor(private miServicio: ServicioEmpleadosService, private empleadosService: EmpleadoService){
    // this.empleados = this.empleadosService.empleados;
  }

  ngOnInit(): void {
    // this.empleados = this.empleadosService.empleados;
    this.empleadosService.obtenerEmpleados().subscribe(misEmpleados => {
      // console.log(misEmpleados);
      this.empleados = Object.values(misEmpleados);
      this.empleadosService.setEmpleados(this.empleados);
    });
  }

  empleados: Empleado[] = [];

  cuadroNombre: string = "";
  cuadroApellido: string = "";
  cuadroCargo: string = "";
  cuadroSalario: number = 0;

  agregarEmpleado(){
    let nuevoEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    // this.miServicio.muestarMensaje("Nombre del empleado: " + nuevoEmpleado.nombre);
    this.empleadosService.agregarEmpleadoServicio(nuevoEmpleado);
  }
}
