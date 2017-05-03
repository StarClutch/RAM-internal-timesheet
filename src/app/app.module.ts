import { UserService } from './shared/user.service';
import { Employee } from './employee.model';
import { TimeSheetService } from './shared/timesheet.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes,RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HoursComponent } from './employee/hours/hours.component';
import { Error404Component } from './shared/error404/error404.component';
import { TimeModalComponent } from './shared/time-modal/time-modal.component';

import { ModalModule } from 'ngx-bootstrap/modal';
import { PastTimeSheetsComponent } from './past-time-sheets/past-time-sheets.component';
import { ManagerApproveTimeSheetsComponent } from './manager-approve-time-sheets/manager-approve-time-sheets.component';
import { ManageOfficeHoursComponent } from './manage-office-hours/manage-office-hours.component';
import { ManageEmployeeHoursComponent } from './manage-employee-hours/manage-employee-hours.component';

const appRoutes: Routes = [
  {path: '', component:DashboardComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'past', component:PastTimeSheetsComponent},
  {path: 'approve', component:ManagerApproveTimeSheetsComponent},
  {path: 'manage-office-hours', component:ManageOfficeHoursComponent},
  {path: 'manage-employee-hours', component:ManageEmployeeHoursComponent},
  {path: '**', component: Error404Component}
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    DashboardComponent,
    HoursComponent,
    Error404Component,
    TimeModalComponent,
    PastTimeSheetsComponent,
    ManagerApproveTimeSheetsComponent,
    ManageOfficeHoursComponent,
    ManageEmployeeHoursComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    ModalModule.forRoot()
  ],
  providers: [TimeSheetService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
