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

  users: User[];
  selectedUser: User;

  constructor(private _userService: UserService,
              private router: Router){
  }

  onSelect(user: User): void {
    this.selectedUser = user;
  }

  ngOnInit() {
    //this.heroes = this.heroService.getHeroes();
    this.getUsers();
  }

  getUsers(): void {
    //this.userService.getHeroes().then(heroes => this.heroes = heroes);
    //this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);

//    this.users = [];
    //this._userService.getMockUsers()
        this._userService.getUsers()
      .subscribe(
        data => this.users = data
//    heroes => this.heroes = heroes,
          //    error =>  this.errorMessage = <any>error);
        //, error => this.error = "Region " + this.region + " is invalid."
      );
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedUser.id]);
  }

}
