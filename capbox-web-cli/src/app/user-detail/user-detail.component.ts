import {Component, OnInit, Input} from '@angular/core';
import {User} from "../model/user";
import {Params, ActivatedRoute} from "@angular/router";
import {UserService} from "../services/user.service";
import 'rxjs/add/operator/switchMap';
import { Location }                 from '@angular/common';

@Component({
  moduleId: module.id,
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  @Input()
  user: User;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.userService.getUsers())
//      .switchMap((params: Params) => this.userService.getHero(+params['id']))
      .subscribe(user => this.user = user);
  }

  goBack(): void {
    this.location.back();
  }

}
