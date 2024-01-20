import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EmpleadoHijoCComponent } from './empleado-hijo-c/empleado-hijo-c.component';
import { CaracteristicasEmpleadoCComponent } from './caracteristicas-empleado-c/caracteristicas-empleado-c.component';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { EmpleadoService } from './empleados.service';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProyectosComponentComponent } from './proyectos-component/proyectos-component.component';
import { ContactoComponentComponent } from './contacto-component/contacto-component.component';
import { QuienesComponentComponent } from './quienes-component/quienes-component.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {path: '', component: HomeComponentComponent},
  {path: 'proyectos', component: ProyectosComponentComponent},
  {path: 'quienes', component: QuienesComponentComponent},
  {path: 'contacto', component: ContactoComponentComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoHijoCComponent,
    CaracteristicasEmpleadoCComponent,
    HomeComponentComponent,
    ProyectosComponentComponent,
    ContactoComponentComponent,
    QuienesComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [ServicioEmpleadosService, EmpleadoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
