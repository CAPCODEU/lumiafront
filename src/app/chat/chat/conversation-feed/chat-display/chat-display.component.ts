import {Component, Input} from '@angular/core';
import {Copy, Flag, LucideAngularModule, Repeat} from 'lucide-angular';

@Component({
  selector: 'app-chat-display',
  imports: [
    LucideAngularModule
  ],
  templateUrl: './chat-display.component.html',
  styleUrl: './chat-display.component.scss'
})
export class ChatDisplayComponent {

  readonly RepeatIcon = Repeat
  readonly CopyIcon = Copy
  readonly FlagIcon = Flag

  @Input() prompt?: string;
  @Input() response?: any;

  prompts: string[] = [];
  responses: any[] = [];

  ngOnChanges() {
    if (this.prompt) {
      this.prompts.push(this.prompt);
    }
    if (this.response) {
      this.responses.push(this.response);
    }
  }


  copyResponse($index: number) {

  }

  reportResponse($index: number) {

  }

  regenerateResponse($index: number) {

  }
}
