import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx'
import {User} from "../model/user";

@Injectable()
export class UserService {
  getAllUsers_url:string = "http://localhost:8080/api/user";
  http:Http;

  constructor(http: Http){
    this.http = http;
  }
  getUsers (){
    return this.http.get(this.getAllUsers_url).map(res => res.json());
  }

  getMockUsers (){
//    return this.http.get('app/services/mockUsers.json').map((res: Response) => USERS);
    return this.http.get('app/services/mockUsers.json').map(res => res.json());
  }

  //getUser(id: number): Promise<User> {
    //return this.getMockUsers().then(users => users.find(user => user.id === id));
  //}

  getMockUser (id: number){
//    return this.http.get('app/services/mockUsers.json').map((res: Response) => USERS);
//    return this.http.get('app/services/mockUsers.json').map(res => res.json()).find(user => user.id === id);
    return this.http.get('app/services/mockUser.json').map(res => res.json());
  }

}
