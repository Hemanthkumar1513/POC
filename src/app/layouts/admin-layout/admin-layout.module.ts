import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout.component';
import { RouterModule } from '@angular/router';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashComponent } from 'src/app/Pages/dash/dash.component';
import { HRComponent } from 'src/app/Pages/hr/hr.component';
import { ScheduleComponent } from 'src/app/Pages/schedule/schedule.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DashComponent,
    HRComponent,
    ScheduleComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule
  ]
})
export class AdminLayoutModule { }
