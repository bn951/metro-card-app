import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()

export class AuthService {

  BASE_URL = "http://localhost:4201/auth";
  NAME_KEY = 'name';
  TOKEN_KEY = 'token';

  constructor(private http: Http, private router: Router) {}

  register(user) {
    console.log('clicked');
    delete user.confirmPassword;
    this.http.post(this.BASE_URL + "/register", user).subscribe(res => {
      console.log(res);
    });
  }
}
