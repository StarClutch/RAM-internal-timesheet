import { BenefitHours } from '../models/benefitHours.model';
import { EventEmitter } from '@angular/core';

export class TimeSheetService{

    benefitHours : BenefitHours;    
    benefitHoursUpdate = new EventEmitter<BenefitHours>();

    constructor(){
        this.benefitHours = new BenefitHours(80,16,40,16);
    }

    updateVacationHours(hours:number){
        this.benefitHours.vacation+=hours;
        this.benefitHoursUpdate.emit(this.benefitHours);
    }

    updateSickHours(hours:number){
        this.benefitHours.sick+=hours;
        this.benefitHoursUpdate.emit(this.benefitHours);
    }

    updatePersonalHours(hours:number){

    }

    updateFloatingHours(hours:number){

    }

}