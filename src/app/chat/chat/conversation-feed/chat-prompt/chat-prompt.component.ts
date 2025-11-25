import {Component, EventEmitter, inject, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {firstValueFrom} from 'rxjs';
import {ChatPromptService} from './chat-prompt.service';
import {LucideAngularModule, Paperclip, Send} from 'lucide-angular';

@Component({
  selector: 'app-chat-prompt',
    imports: [
      FormsModule,
      LucideAngularModule
    ],
  templateUrl: './chat-prompt.component.html',
  styleUrl: './chat-prompt.component.scss'
})
export class ChatPromptComponent {

  readonly SendIcon = Send;
  readonly PaperclipIcon = Paperclip;

  @Output() prompt: EventEmitter<string> = new EventEmitter<string>();
  @Output() response: EventEmitter<any> = new EventEmitter<any>();

  message: string = '';
  res: any = null;
  service = inject(ChatPromptService);

  async sendMessage() {
    this.res = await firstValueFrom(this.service.send({
      message: this.message
    }));
    this.response.emit(this.res);
    this.prompt?.emit(this.message);
    console.log('Sending message:', this.message);
  }

  attachFile(fileInput?: HTMLInputElement) {
    fileInput?.click();
  }

  async onFileSelected(event: Event) {

  }

}
