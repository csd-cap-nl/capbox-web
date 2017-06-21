import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx'
import {User} from "../model/user";
import {Observable} from "rxjs";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  getAllUsers_url:string = "http://localhost:8080/api/user";
  http:Http;

  users: User[];
  selectedUser: User;


  constructor(http: Http){
    this.http = http;
  }


  mapUsers(response:Response): User[]{
  // uncomment to simulate error:
  // throw new Error('ups! Force choke!');

  // The response of the API has a results
  // property with the actual results
  return response.json().results.map(this.toUser)
}

  toUser(r:any): User{
  let user = <User>({
    id: r.id,
    userName: r.userName,
    fullName: r.fullName,
    email: r.email,
  });
  console.log('Parsed user:', user);
  return user;
}

  //deze werkt:
  getUsers (){
    return this.http.get(this.getAllUsers_url).map(res => res.json());
  }

  getUser(id: number) {
    console.log('getUser:' + this.getAllUsers_url + '/' + id);
    this.getUsers().subscribe(data => this.users = data);
//    this.users = this.http.get(this.getAllUsers_url).map(res => res.json()).map(this.mapUsers);

    console.log('halverwege');
    for (let user of this.users) {
      console.log('in loop:' + user); // 1, "string", false
      console.log("gggetUser=" + user.id);
      if (user.id == id) return user;
    }
    //return this.users.filter(user => user.id === id);
  }


  //deze werkt:
  getUserById (id: number){
    console.log('getUserById:' + this.getAllUsers_url + '/' + id);
    return this.http.get(this.getAllUsers_url + '/' + id).map(res => res.json());
  }

//MockUsers haalt de data van een locale .json file: mockUsers.json
// Kan je gebruiken als je geen sprint boot server hebt
  getMockUsers () {
//    return this.http.get('app/services/mockUsers.json').map(res => res.json());
    return this.http.get('app/services/mockUsers.json').map(res => res.json() as User[]);
  }

  getMockUser (id: number): Observable<User> {
//    return this.http.get('app/services/mockUsers.json').map((res: Response) => USERS);
    console.log('id=' + id);
    return this.http.get('app/services/mockUsers.json').map(res => res.json()).find(user => user.id === id);
//    return this.http.get('app/services/mockUsers.json').subscribe()
  }


    getMockUser2 (id: number): Observable<User>{
      console.log('id=' + id);
    return this.http.get('app/services/mockUsers.json').map(res => {return {
      "id": 2,
      "userName": "username 2",
      "fullName": "fullname 2",
      "email": "email 2"
    }});
  }


  getUsersExtractData (): Observable<User[]> {
    return this.http.get('app/services/mockUsers.json')
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
