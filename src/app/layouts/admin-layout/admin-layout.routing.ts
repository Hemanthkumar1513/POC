import { Routes } from '@angular/router';

import { DashComponent } from 'src/app/Pages/dash/dash.component';
import { HRComponent } from 'src/app/Pages/hr/hr.component';
import { ScheduleComponent } from 'src/app/Pages/schedule/schedule.component';


export const AdminLayoutRoutes: Routes =[
    { path : 'dashboard', component: DashComponent},
    { path : 'HR', component : HRComponent},
    { path : 'Schedule', component : ScheduleComponent}

]