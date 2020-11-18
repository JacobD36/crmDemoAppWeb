import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../models/user.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // private url = 'http://localhost:8090';
  private url = 'http://198.211.103.130:8090';

  userToken: string;

  constructor( private http: HttpClient) {
    this.getToken();
  }

  logout() {
    localStorage.removeItem('token');
  }

  login( user: UserModel) {
    const authData = {
      codUser: user.codUser,
      password: user.password
    };

    return this.http.post(`${this.url}/login`, authData).pipe(
      map( resp => {
        this.saveToken(resp['token']);
        return resp;
      })
    );
  }

  newUser( user: UserModel) {}

  private saveToken( idToken: string) {
    this.userToken = idToken;
    localStorage.setItem('token', idToken);

    let today = new Date();
    today.setSeconds(3600);

    localStorage.setItem('expire', today.getTime().toString());
  }

  private getToken() {
    if (localStorage.getItem('token')) {
      this.userToken = localStorage.getItem('token');
    } else {
      this.userToken = '';
    }

    return this.userToken;
  }

  isAuth(): boolean {
    if (this.userToken.length < 2) {
      return false;
    } else {
      const EXPIRA = Number(localStorage.getItem('expire'));
      const expiresAt = new Date();
      expiresAt.setTime(EXPIRA);

      if (expiresAt > new Date()) {
        return true;
      } else {
        return false;
      }
    }
  }
}
