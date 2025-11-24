import {inject, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatPromptService {
  http= inject(HttpClient);
  constructor() { }

  send(param: { message?: string }) {
    return this.http.post<any>(`${environment.apiUrl}/chat`, param );
  }
}
