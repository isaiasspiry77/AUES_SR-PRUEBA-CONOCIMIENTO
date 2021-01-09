import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {CdkDragDrop, moveItemInArray, transferArrayItem,CdkDrag} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css']
})
export class GruposComponent implements OnInit {

  grupos = [];
  basket = [];
  empleadosG = [];
  temEmployees = [];

  constructor(private _httpClient: HttpClient) { }

  ngOnInit(): void {
    this._httpClient.get('https://api-example-aes.herokuapp.com/list_groups').subscribe((res: any) => {
      return this.grupos = res;
    });

  }

  drop(event: CdkDragDrop<any>) {
    if (event.previousContainer === event.container) {
      console.log(event);
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex); 
    }
  }

   getListEmployeesForGoups(): any{
   
    this._httpClient.get('https://api-example-aes.herokuapp.com/list_employees').subscribe((res: any) => {
      return this.temEmployees = res;
    });
  }


  getEmployees(){
    this.empleadosG = this.getListEmployeesForGoups();

  
    
  }
}
