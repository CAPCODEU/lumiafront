import { TestBed } from '@angular/core/testing';

import { ChatTopbarService } from './chat-topbar.service';

describe('ChatTopbarService', () => {
  let service: ChatTopbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatTopbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
