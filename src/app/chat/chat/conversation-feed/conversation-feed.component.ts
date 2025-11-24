import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {ChatTopbarComponent} from './chat-topbar/chat-topbar.component';
import {ChatDisplayComponent} from './chat-display/chat-display.component';
import {ChatPromptComponent} from './chat-prompt/chat-prompt.component';

@Component({
  selector: 'app-conversation-feed',
  imports: [
    FormsModule,
    ChatTopbarComponent,
    ChatDisplayComponent,
    ChatPromptComponent
  ],
  templateUrl: './conversation-feed.component.html',
  styleUrl: './conversation-feed.component.scss'
})
export class ConversationFeedComponent {

}
