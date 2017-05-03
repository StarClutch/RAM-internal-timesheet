import { BenefitHours } from '../models/benefitHours.model';
import { Employee } from '../models/employee.model';
import { EventEmitter } from '@angular/core';

export class UserService{

    employee : Employee;    

    constructor(){
        this.employee = new Employee("Blake","Shetter",new BenefitHours(80,16,40,16));
    }

}