import {Component,OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import {CommonModule, NgLocalization, NgLocaleLocalization} from '@angular/common'
import { IDropdownSettings } from '../../node_modules/ng-multiselect-dropdown/';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[{ provide: NgLocalization, useClass: NgLocaleLocalization }]
})

export class AppComponent {
  employees:any[];
  selectedEmployeeCountRadioButton: string='all';
  constructor(){
    this.employees=[
      {name:'balu', field: 'IT', salary:'25k', gender:'male'},
      {name:'Ajay', field: 'Civil', salary:'14k',gender:'male'},
      {name:'pardhu', field: 'IT', salary:'1L',gender:'male'},
      {name:'supragna', field:'IT', salary:'25k',gender:'female'},
      {name:'nikitha', field:'IT', salary:'20k',gender:'female'},
      {name:'nikitha', field:'IT', salary:'20k',gender:'female'}
    ];
  }
  onemployeeCountRadioButtonChnage(selectedRadioButtonValue:string):void{
    this.selectedEmployeeCountRadioButton=selectedRadioButtonValue;
  }
  getTotalEmployeesCount():number{
    return this.employees.length;
  }
  getTotalMaleEmployeesCount():number{
    return this.employees.filter(e=>e.gender==='male').length;
  }
  getTotalFemaleEmployeesCount():number{
    return this.employees.filter(e=>e.gender==='female').length;
  }
}

