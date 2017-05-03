import { BenefitHours } from './../benefitHours.model';
import { Employee } from './../employee.model';
import { EventEmitter } from '@angular/core';

export class UserService{

    employee : Employee;    

    constructor(){
        this.employee = new Employee("Blake","Shetter",new BenefitHours(80,16,40,16));
    }

}