import {inject, Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  http= inject(HttpClient);
  constructor() { }

  send(param: { message?: string }) {
    return this.http.post<any>(`${environment.apiUrl}/chat`, param );
  }
}
