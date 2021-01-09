import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormsModule } from '@angular/forms';
import { NgForm } from "@angular/forms";

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-empleado',
  templateUrl: './add-empleado.component.html',
  styleUrls: ['./add-empleado.component.css']
})
export class AddEmpleadoComponent implements OnInit {

  constructor(private _hhtp: HttpClient) { }

  ngOnInit(): void {
  }

  registerUser(form: NgForm) {
    console.log(form.value.birthdate);


    this._hhtp.post('https://api-example-aes.herokuapp.com/save_employee', {
      name: form.value.name,
      last_name: form.value.last_name,
      birthday: form.value.birthdate,
      developer_group: form.value.developer_group
    }).subscribe((res: any) => {
      console.log(res);
    })
  }
}
