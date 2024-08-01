import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { SidebarComponent } from './sidebar/sidebar.component';
// import { DashComponent } from './Pages/dash/dash.component';
// import { HRComponent } from './Pages/hr/hr.component';
// import { ScheduleComponent } from './Pages/schedule/schedule.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import {routes} from './app-routing.module';
import { SidebarModule } from './sidebar/sidebar.module';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash:true
    }),
    SidebarModule
    // AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
