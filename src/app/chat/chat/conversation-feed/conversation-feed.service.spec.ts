import { TestBed } from '@angular/core/testing';

import { ConversationFeedService } from './conversation-feed.service';

describe('ConversationFeedService', () => {
  let service: ConversationFeedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConversationFeedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
