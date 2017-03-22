import { Component, OnInit } from '@angular/core';
import {User} from "../model/user";
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

    users:User[];
    selectedUser:User;

    constructor(private _userService:UserService,
                private router:Router) {
    }

    onSelect(user:User):void {
        this.selectedUser = user;
    }

    ngOnInit() {
        this.getUsers();
    }

    getUsers():void {
        this._userService.getUsers()
            .subscribe(
                data => this.users = data
        );
    }

    gotoDetail():void {
        this.router.navigate(['/detail', this.selectedUser.id]);
    }

}
