import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {EncryptService} from "../Encrypt/encrypt.service";
import {environment} from "../../environments/environment";
import {AuthResponse} from "../classes/authResponse";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  encryptService = inject(EncryptService);
  http = inject(HttpClient);
  private isAuthenticated: boolean = false;
  private urlLogin = `${environment.jarvisUrl}/account/login`;
  private urlLocalLogin = `${environment.apiUrl}/userprofile/login`;
  private urlMe = `${environment.jarvisUrl}/account/me`;


  constructor() { }

  postLogin(username: string, password: string) {
    const jsonBody = { "username": username, "password": password, "application": "Ubilaw" };
    console.log('Login attempt:', jsonBody);
    return this.http.post<AuthResponse>(this.urlLogin, jsonBody);
  }

  getMe(): Observable<any> {
    return this.http.get(this.urlMe);
  }
}
