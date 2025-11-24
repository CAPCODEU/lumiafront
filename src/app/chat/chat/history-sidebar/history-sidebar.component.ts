import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {LucideAngularModule, Search, Ellipsis} from 'lucide-angular';

@Component({
  selector: 'app-history-sidebar',
  imports: [
    FormsModule,
    LucideAngularModule
  ],
  templateUrl: './history-sidebar.component.html',
  styleUrl: './history-sidebar.component.scss'
})
export class HistorySidebarComponent {

  readonly SearchIcon = Search;
  readonly EllipsisIcon = Ellipsis;

    selectedConversationId?: string;
    searchQuery: string = '';
    userConversations = [
        { id: '1', title: 'Conversation 1' },
        { id: '2', title: 'Conversation 2' },
        { id: '3', title: 'Conversation 3' }
    ];

    doSearch() {
        console.log('Searching for:', this.searchQuery);
    }

    selectConversation(conversationId: string) {
        this.selectedConversationId = conversationId;
    }

    openOptions() {
        console.log('Options clicked');
    }
}
