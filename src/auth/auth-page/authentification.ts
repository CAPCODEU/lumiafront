import { Component } from '@angular/core';
import {AuthentificationForm} from '../auth-form/authentification-form';

@Component({
  selector: 'app-authentification',
  imports: [
    AuthentificationForm,
  ],
  templateUrl: './authentification.html',
  styleUrl: './authentification.scss'
})
export class Authentification {

  isChecked: boolean = false;

  onAuthChange(event: Event) {
    this.isChecked = (event.target as HTMLInputElement).checked;
  }
}
