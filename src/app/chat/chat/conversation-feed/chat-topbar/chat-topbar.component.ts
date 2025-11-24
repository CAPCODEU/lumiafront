import { Component } from '@angular/core';
import {LanguageModel} from '../../../../../auth/classes/language-model';

@Component({
  selector: 'app-chat-topbar',
  imports: [],
  templateUrl: './chat-topbar.component.html',
  styleUrl: './chat-topbar.component.scss'
})
export class ChatTopbarComponent {
  modelList: LanguageModel[] = [
    { id: 'gpt-3.5-turbo', name: 'GPT-3.5 Turbo', description: 'A powerful language model for general purposes.' },
    { id: 'gpt-4', name: 'GPT-4', description: 'The latest and most advanced language model.' },
    { id: 'custom-model', name: 'Custom Model', description: 'A user-defined custom language model.' }
  ];
  selectedModel: LanguageModel = this.modelList[0];

  onModelChange(event: any) {
    this.selectedModel = event.target.value;
    console.log('Selected model:', this.selectedModel);
  }
}
