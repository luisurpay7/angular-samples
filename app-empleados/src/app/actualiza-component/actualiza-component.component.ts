import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadoService } from '../empleados.service';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-actualiza-component',
  templateUrl: './actualiza-component.component.html',
  styleUrl: './actualiza-component.component.css'
})
export class ActualizaComponentComponent {

  constructor(private router: Router, private route: ActivatedRoute, private empleadosService: EmpleadoService){}

  ngOnInit(): void {
    this.empleados = this.empleadosService.empleados;
    this.indice = this.route.snapshot.params['id'];
    // let empleado: Empleado = this.empleados[this.indice];
    let empleado: Empleado = this.empleadosService.encontrarEmpleado(this.indice);

    this.cuadroNombre = empleado.nombre;
    this.cuadroApellido = empleado.apellido;
    this.cuadroCargo = empleado.cargo;
    this.cuadroSalario = empleado.salario;
  }

  empleados: Empleado[] = [];

  cuadroNombre: string = "";
  cuadroApellido: string = "";
  cuadroCargo: string = "";
  cuadroSalario: number = 0;

  indice: number;

  actualizarEmpleado(){
    let nuevoEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    // this.miServicio.muestarMensaje("Nombre del empleado: " + nuevoEmpleado.nombre);
    this.empleadosService.modificarEmpleadoServicio(this.indice, nuevoEmpleado);
    this.router.navigate(['']);
  }

  eliminarEmpleado(){
    this.empleadosService.eliminarEmpleadoServicio(this.indice);
    this.router.navigate(['']);
  }

  volverHome(){
    this.router.navigate(['']);
  }

}
