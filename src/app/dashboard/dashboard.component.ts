import { Component, OnInit } from '@angular/core';
import {User} from "../model/user";
import {UserService} from "../services/user.service";

@Component({
    moduleId: module.id,
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    providers: [UserService],
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    users:User[] = [];

    constructor(private _userService:UserService) {
    }

    ngOnInit():void {
        this.users = [];
        this._userService.getUsers()
            .subscribe(
                data => this.users = data.slice(0, 4)
        );
    }


}
