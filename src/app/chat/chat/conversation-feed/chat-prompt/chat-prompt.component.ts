import {Component, inject} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {JsonPipe} from "@angular/common";
import {firstValueFrom} from 'rxjs';
import {ChatPromptService} from './chat-prompt.service';

@Component({
  selector: 'app-chat-prompt',
    imports: [
        FormsModule,
        JsonPipe
    ],
  templateUrl: './chat-prompt.component.html',
  styleUrl: './chat-prompt.component.scss'
})
export class ChatPromptComponent {
  message?: string;
  response?: any;
  service = inject(ChatPromptService);

  async sendMessage() {
    this.response = await firstValueFrom(this.service.send({
      message: this.message
    }));
  }
}
