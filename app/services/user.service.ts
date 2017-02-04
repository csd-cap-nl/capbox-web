import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {User} from "../model/user";

@Injectable()
export class UserService {
    userApi:string = "http://localhost:8080/api/user";
    http:Http;

    constructor(http:Http) {
        this.http = http;
    }

    getUsers():Observable<User[]> {
        return this.http.get(this.userApi)
            .map(res => res.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    getUser(id:number):Observable<User> {
        return this.http.get(`${this.userApi}/${id}`)
            .map(res => res.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    addUser(user:User):Observable<User[]> {
        let bodyString = JSON.stringify(user); // Stringify payload
        let headers = new Headers({'Content-Type': 'application/json'}); // ... Set content type to JSON
        let options = new RequestOptions({headers: headers}); // Create a request option

        return this.http.post(this.userApi, user, options)
            .map((res:Response) => res.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    updateUser(user:User):Observable<User[]> {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});

        return this.http.put(`${this.userApi}/${user.id}`, JSON.stringify(user), options)
            .map((res:Response) => res.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    removeUser(id:string):Observable<User[]> {
        return this.http.delete(`${this.userApi}/${id}`)
            .map((res:Response) => res.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

}
