import { Component } from '@angular/core';
import {LanguageModel} from '../../../../../auth/classes/language-model';
import {FormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';
import {LucideAngularModule, User} from 'lucide-angular';

@Component({
  selector: 'app-chat-topbar',
  imports: [
    FormsModule,
    NgForOf,
    LucideAngularModule
  ],
  templateUrl: './chat-topbar.component.html',
  styleUrl: './chat-topbar.component.scss'
})
export class ChatTopbarComponent {

  readonly UserIcon = User;

  modelList: LanguageModel[] = [
    { id: 'gpt-3.5-turbo', name: 'GPT-3.5 Turbo', description: 'A powerful language model for general purposes.' },
    { id: 'gpt-4', name: 'GPT-4', description: 'The latest and most advanced language model.' },
    { id: 'custom-model', name: 'Custom Model', description: 'A user-defined custom language model.' }
  ];
  selectedModel: LanguageModel = this.modelList[0];

  onModelChange(model: LanguageModel) {
    this.selectedModel = model;
    console.log('Selected model:', model);
  }

  trackById(_: number, item: LanguageModel) {
    return item.id;
  }

  toggleProfileMenu() {

  }
}
