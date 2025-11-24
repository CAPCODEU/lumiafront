import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HistorySidebarComponent} from './history-sidebar/history-sidebar.component';
import {ConversationFeedComponent} from './conversation-feed/conversation-feed.component';

@Component({
    selector: 'app-chat',
  imports: [
    FormsModule,
    HistorySidebarComponent,
    ConversationFeedComponent,
  ],
    templateUrl: './chat.component.html',
    styleUrl: './chat.component.scss'
})
export class ChatComponent {

}
