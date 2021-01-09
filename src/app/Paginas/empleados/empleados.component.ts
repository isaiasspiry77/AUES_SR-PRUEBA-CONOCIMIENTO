import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  empleados = [];
  p = 1;
  filtro = "";

  constructor( private _httpClient: HttpClient ) { }

  ngOnInit(): void {
    this._httpClient.get('https://api-example-aes.herokuapp.com/list_employees').subscribe((res: any) => {
      return this.empleados = res;
    });
  }

}
