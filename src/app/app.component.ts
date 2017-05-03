import { UserService } from './shared/services/user.service';
import { Component } from '@angular/core';

import {Day} from './shared/models/day.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent {
  days : Day[] = [];

  constructor(private userService:UserService){}

}
