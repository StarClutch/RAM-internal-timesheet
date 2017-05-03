import { UserService } from './shared/user.service';
import { Component } from '@angular/core';

import {Day} from './day.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent {
  days : Day[] = [];

  constructor(private userService:UserService){}

  // currentDay : number;
  // currentMonth : number;
  // currentYear : number;
  // currentDate : Date;

  // ngOnInit(){
  //   this.currentYear=2017;
  //   this.currentMonth=11;
  //   this.currentDay=16;
  //   this.currentDate = new Date(this.currentYear,this.currentMonth,1);
  //   this.generateCalendar();
  // }

  // generateCalendar(){
  //   console.log(this);
  //   var lastDay = 15;
  //   if(this.currentDay==16){
  //     lastDay=new Date(this.currentYear,this.currentMonth,0).getDate();
  //   }

  //     for(var i=this.currentDay; i<=lastDay; i++){
  //       const day : Day = new Day(new Date(this.currentYear,this.currentMonth,i));
  //       this.days.push(day);
  //     }
  // }

  // moveCalendar(direction:string){
  //   this.days = [];
  //   if(direction=='back'){
  //     this.currentYear = this.currentMonth == 1 ? this.currentYear-1 : this.currentYear;      
  //     this.currentMonth = this.currentMonth == 1 ? 11 : this.currentMonth -1;
  //     this.currentDay = this.currentDay == 1 ? 16 : 1;
  //   }
  // else{

  // }
  
  //   this.generateCalendar();
  // }

}
