import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx'

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

}
