import { TestBed } from '@angular/core/testing';

import { ChatPromptService } from './chat-prompt.service';

describe('ChatPromptService', () => {
  let service: ChatPromptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatPromptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
