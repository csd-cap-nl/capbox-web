import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component.ts';
import { DashboardComponent } from './dashboard/dashboard.component.ts';
import { UserDetailComponent } from './user-detail/user-detail.component.ts';
import { UsersComponent } from './users/users.component.ts';
import {UserService} from "./services/user.service.ts";
import {AppRoutingModule} from "./app-routing.module.ts";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserDetailComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
