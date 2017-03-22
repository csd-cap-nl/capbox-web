import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/Rx'
import {User} from "../model/user";
import {Observable} from "rxjs";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
    userApi:string = "http://localhost:8080/api/user";
    http:Http;

    users:User[];
    selectedUser:User;

    constructor(http:Http) {
        this.http = http;
    }

    getUsers():Observable<User[]> {
        return this.http.get(this.userApi)
            .map(res => res.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    getUserById(id:number):Observable<User> {
        console.log('getUserById:' + this.userApi + '/' + id);
        return this.http.get(`${this.userApi}/${id}`)
            .map(res => res.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    addUser(user:User):Observable<User[]> {
        debugger;
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});

        return this.http.post(this.userApi, JSON.stringify(user), options)
            .map((res:Response) => res.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

}
