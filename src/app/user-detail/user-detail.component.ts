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
    private _userService: UserService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    console.log('id==');

    this.route.params.forEach((params:Params) => {
      debugger;
      let id = +params['id'];

      if (id) {
        this._userService.getUserById(id)
            .subscribe(user => this.user = user);
      } else {
        this.user = new User(0, 'JD', 'John Doe', 'john@doe.com');
      }
    });
  }

  goBack(): void {
    this.location.back();
  }

}
