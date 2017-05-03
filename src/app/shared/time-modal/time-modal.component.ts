import { Day } from './../../day.model';
import { Component, OnInit,ViewChild, Input } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-time-modal',
  templateUrl: './time-modal.component.html',
  styleUrls: ['./time-modal.component.css'],
  exportAs: 'child'
})
export class TimeModalComponent implements OnInit {

  @Input() day : Day;


  @ViewChild('childModal') public childModal:ModalDirective;
  public showChildModal():void {
    this.childModal.show();
  }
 
  public hideChildModal():void {
    this.childModal.hide();
  }
  constructor() { }

  ngOnInit() {
  }

}
