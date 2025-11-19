import {Component, inject} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {ChatService} from "./chat.service";
import {firstValueFrom} from "rxjs";
import {JsonPipe} from "@angular/common";

@Component({
    selector: 'app-chat',
    imports: [
        FormsModule,
        JsonPipe
    ],
    templateUrl: './chat.component.html',
    styleUrl: './chat.component.scss'
})
export class ChatComponent {
    message?: string;
    response?: any;
    service = inject(ChatService);

    async sendMessage() {
        this.response = await firstValueFrom(this.service.send({
            message: this.message
        }));
    }
}
