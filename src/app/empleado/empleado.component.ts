import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.css'
})
export class EmpleadoComponent {

  edad = 24;

  llamaEmpresa(value: String){

  }

  habilitacionCuadro=false;
  usuRegistrado=false;

  getRegistroUsuario(){
    this.usuRegistrado=true;
  }

  textoDeRegistro="No hay usuario registrado";

  setUsuarioRegistrado(){
    // alert("Nuevo usuario");
    this.textoDeRegistro = "Hay un usuario registrado"
  }

  setUsuarioRegistrado2(event: Event){
    // alert(event.target); //HTMLImputElement
    if((<HTMLInputElement>event.target).value=="si"){ //como hacer un casting: transformar el objeto elemento a un objeto HTML para acceder a su propiedad
      this.textoDeRegistro = "Hay un usuario registrado"
    }else{
      this.textoDeRegistro = "No hay nadie registrado"
    }
  }
}
