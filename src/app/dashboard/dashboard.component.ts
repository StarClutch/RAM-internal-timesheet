import { UserService } from './../shared/services/user.service';
import { TimeSheetService } from './../shared/services/timesheet.service';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { TimeModalComponent } from './../shared/time-modal/time-modal.component';
import { Day } from './../shared/models/day.model';
import { Component, OnInit, ViewChild, ViewContainerRef, Input } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [TimeSheetService]
})
export class DashboardComponent implements OnInit {
    @ViewChild('childModal') public childModal:ModalDirective;

  days : Day[] = [];
  currentDay : number;
  currentMonth : number;
  currentYear : number;
  currentDate : Date;
  constructor(private viewContainerRef: ViewContainerRef,private timeSheetService:TimeSheetService,private userService:UserService)  { }

  ngOnInit(){
    this.currentYear=2017;
    this.currentMonth=4;
    this.currentDay=16;
    this.currentDate = new Date(this.currentYear,this.currentMonth,1);
    this.generateCalendar();
  }

  generateCalendar(){
    var lastDay = 15;
    if(this.currentDay==16){
      lastDay=new Date(this.currentYear,this.currentMonth,0).getDate();
    }

      for(var i=this.currentDay; i<=lastDay; i++){
        const day : Day = new Day(new Date(this.currentYear,this.currentMonth,i));
        this.days.push(day);
      }
  }

  sickChange(input:number,index:number){
    this.days[index].benefitHours.sick=input;
    this.timeSheetService.updateSickHours(-input);
  }
  vacationChange(input:number,index:number){
    this.days[index].benefitHours.vacation=input;
    this.timeSheetService.updateVacationHours(-input);
  }
  personalChange(input:number,index:number){
    this.days[index].benefitHours.personal=input;
    this.timeSheetService.updatePersonalHours(-input);
  }
  floatingChange(input:number,index:number){
    this.days[index].benefitHours.floating=input;
    this.timeSheetService.updateFloatingHours(-input);
  }

  copyAbove(index:number){
    for(var i=index-1; i>=0; i--){
      var loopDay=this.days[i];
      if(!loopDay.closed){
        this.days[index].benefitHours.sick=loopDay.benefitHours.sick;
        this.days[index].benefitHours.vacation=loopDay.benefitHours.vacation;
        this.days[index].benefitHours.floating=loopDay.benefitHours.floating;
        this.days[index].benefitHours.personal=loopDay.benefitHours.personal;
        break;
      }
    }

  }

}
