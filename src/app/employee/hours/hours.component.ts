import { TimeSheetService } from './../../shared/services/timesheet.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hours',
  templateUrl: './hours.component.html',
  styleUrls: ['./hours.component.css']
})
export class HoursComponent implements OnInit {

  constructor(private timeSheetService:TimeSheetService) { }

  ngOnInit() {
    console.log(this.timeSheetService);
  }

}
