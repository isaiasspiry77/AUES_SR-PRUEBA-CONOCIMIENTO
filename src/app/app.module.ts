import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmpleadosComponent } from './Paginas/empleados/empleados.component';
import { InicioComponent } from './Paginas/inicio/inicio.component';
import { GruposComponent } from './Paginas/grupos/grupos.component';
import { AddEmpleadoComponent } from './Paginas/add-empleado/add-empleado.component';

//angular material
import {MatCardModule} from '@angular/material/card'; 
import {MatListModule} from '@angular/material/list'; 
import {MatDividerModule} from '@angular/material/divider'; 
import {MatGridListModule} from '@angular/material/grid-list'; 
import {MatTableModule} from '@angular/material/table';
import {DragDropModule} from '@angular/cdk/drag-drop';


import { FiltroEmpleadosPipe } from './Filtros/filtro-empleados.pipe';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadosComponent,
    InicioComponent,
    GruposComponent,
    AddEmpleadoComponent,
    FiltroEmpleadosPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    MatCardModule,
    MatListModule,
    MatDividerModule,
    MatGridListModule, 
    DragDropModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
