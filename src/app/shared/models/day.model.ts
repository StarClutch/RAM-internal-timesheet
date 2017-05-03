import { BenefitHours } from './benefitHours.model';
export class Day{
        month: string;
        day : string;
        dayName : string;
        closed : boolean;
        benefitHours : BenefitHours;
        days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

      constructor(public date: Date) {
        const dayOfWeek=this.date.getDay();

        this.closed=dayOfWeek == 0 || dayOfWeek == 6 ? true : false;
        this.date=date;
        this.month = this.months[this.date.getMonth()];
        this.day = this.date.getDate().toString();
        this.dayName = this.days[dayOfWeek];
        this.benefitHours = new BenefitHours(0,0,0,0);
      }


}