import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmpleadoComponent } from './Paginas/add-empleado/add-empleado.component';
import { EmpleadosComponent } from './Paginas/empleados/empleados.component';
import { GruposComponent } from './Paginas/grupos/grupos.component';
import { InicioComponent } from './Paginas/inicio/inicio.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'empleados', component: EmpleadosComponent },
  { path: 'grupos', component: GruposComponent },
  { path: 'addEmpleado', component: AddEmpleadoComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' } //redirecciona a la pagina de inicio ante cualquier url no establecidas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
