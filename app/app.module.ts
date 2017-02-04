import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
import { DashboardComponent }  from './dashboard/dashboard.component';
import { UsersComponent }  from './users/users.component';
import { UserDetailComponent }  from './user-detail/user-detail.component';
import { UserService }  from './services/user.service';

import { routing } from './app.routing';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        UsersComponent,
        UserDetailComponent
    ],
    providers: [
        UserService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
